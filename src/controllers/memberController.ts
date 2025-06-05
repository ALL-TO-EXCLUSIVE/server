import { NextFunction, Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { RequestWithFile } from '../types';
import cloudinary from '../config/cloudinary';
import bcrypt from "bcryptjs";
import { BaseController } from "./BaseController";

export class MemberController extends BaseController {

  // ✅ Create Member
  createMember = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | any> => {
    try {
      let {
        name,
        dob,
        gender,
        job,
        business,
        education,
        bloodGroup,
        maternalSurname,
        maternalVillage,
        familyId,
        email,
        password,
        phone,
        relationToHead,
        maritalStatus,
        photoUrl,
        address,
      } = req.body;

      if (!name || !familyId || !password || !phone) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Format DOB
      dob = dob?.trim() ? new Date(dob).toISOString() : null;

      // Check family and get villageId
      const family = await prisma.family.findUnique({
        where: { id: familyId },
        select: { villageId: true }
      });

      if (!family) {
        return res.status(404).json({ error: "Family not found" });
      }

      const hashedPassword = bcrypt.hashSync(password, 10);

      const newMember = await prisma.member.create({
        data: {
          name,
          dob,
          gender,
          job,
          business,
          education,
          bloodGroup,
          maternalSurname,
          maternalVillage,
          familyId,
          villageId: family.villageId,
          email: email || null,
          password: hashedPassword,
          phone,
          relationToHead,
          maritalStatus,
          photoUrl: photoUrl || null,
          address: address || null
        }
      });

      return res.status(201).json(newMember);
    } catch (error: any) {
      console.error("Error creating member:", error);

      if (error.code === 'P2002') {
        const field = error.meta?.target?.[0] || 'field';
        return res.status(400).json({
          error: `A member with this ${field} already exists.`
        });
      }

      return res.status(500).json({ error: "Internal Server Error" });
    }
  };

  // ✅ Get Member by ID
  getMemberById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | any> => {
    try {
      const { id } = req.params;

      const member = await prisma.member.findUnique({
  where: { id },
  select: {
    id: true,
    name: true,
    email: true,
    phone: true,
    bloodGroup: true,
    education: true,
    business: true,
    job: true,
    address: true,
    maternalSurname: true,
    maternalVillage: true,
    maritalStatus: true,
    photoUrl: true,
    familyId: true,
    relationToHead: true,
    gender: true,
    dob: true,
    familyHeadId: true, // 👈

    family: {
      select: {
        id: true,
        members: {
          select: {
            id: true,
            name: true,
            relationToHead: true,
            gender: true,
            photoUrl: true,
            dob: true,
            familyHeadId: true // 👈
          }
        }
      }
    }
  }
});


      if (!member) {
        return res.status(404).json({ error: "Member not found" });
      }

      res.json(member);
    } catch (error) {
      next(error);
    }
  };

  // ✅ Update Member
  updateMember = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | any> => {
    try {
      const { id } = req.params;
      const updateData = req.body;

      if (updateData.password) {
        updateData.password = bcrypt.hashSync(updateData.password, 10);
      }

      const updated = await prisma.member.update({
        where: { id },
        data: updateData
      });

      return res.json(updated);
    } catch (error) {
      next(error);
    }
  };

  // ✅ Delete Member
  deleteMember = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | any> => {
    try {
      const { id } = req.params;
      await prisma.member.delete({
        where: { id }
      });
      return res.json({ message: "Member deleted successfully" });
    } catch (error) {
      next(error);
    }
  };

  // ✅ Upload Profile Photo
  updateProfilePhoto = async (
    req: RequestWithFile,
    res: Response,
    next: NextFunction
  ): Promise<Response | any> => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'profiles',
        transformation: [{ width: 500, height: 500, crop: 'fill' }]
      });

      const member = await prisma.member.update({
        where: { id: req.params.id },
        data: { photoUrl: result.secure_url }
      });

      res.json({ photoUrl: member.photoUrl });
    } catch (error) {
      res.status(500).json({ error: 'Upload failed' });
    }
  };

  // ✅ Get all members (optional)
  getAllMembers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | any> => {
    try {
      const members = await prisma.member.findMany({
        select: {
          id: true,
          name: true,
          villageId: true,
          role: true
        }
      });

      return res.json(members);
    } catch (error) {
      next(error);
    }
  };
}

export default MemberController;
