import { NextFunction, Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { RequestWithFile } from '../types';
import cloudinary from '../config/cloudinary';

export const createMember = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
  const {
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
    // familyMemberRelation,
  } = req.body;

  if (!name || !familyId) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Fetch the villageId from family
    const family = await prisma.family.findUnique({
      where: { id: familyId },
      select: { villageId: true },
    });

    if (!family) {
      return res.status(404).json({ error: "Family not found" });
    }

    const member = await prisma.member.create({
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
        email,
        password,
        phone,


      }
    });

    res.status(201).json(member);
  } catch (error) {
    next(error);
    console.error("Error creating member:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllMembers = async (req: Request, res: Response, next: NextFunction) : Promise<Response | any> => {
  try {
    const members = await prisma.member.findMany();
    return res.json(members);
  } catch (error) {
    next(error);
  }
};

export const getMemberById = async (req: Request, res: Response, next: NextFunction) : Promise<Response | any> => {
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
        // Exclude sensitive fields like password
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

export const updateMember = async (req: Request, res: Response, next: NextFunction):Promise<Response | any> => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const member = await prisma.member.update({
      where: { id },
      data: updateData
    });
    return res.json(member);
  } catch (error) {
    next(error);
  }
};

export const deleteMember = async (req: Request, res: Response, next: NextFunction):Promise<Response | any> => {
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

export const updateProfilePhoto = async (
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
      transformation: [
        { width: 500, height: 500, crop: 'fill' }
      ]
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
