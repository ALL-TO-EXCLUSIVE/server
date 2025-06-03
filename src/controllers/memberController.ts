import { NextFunction, Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { RequestWithFile } from '../types';
import cloudinary from '../config/cloudinary';
import bcrypt from "bcryptjs";
import { BaseController } from "./BaseController";


export class MemberController extends BaseController {


  createMember = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
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
    } = req.body;

    if (!name || !familyId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Handle dob properly - convert to valid DateTime or null
    if (dob === undefined || dob === '' || dob === null) {
      dob = null;
    } else {
      try {
        // Parse the date - handles both ISO format and custom formats
        const dobDate = new Date(dob);
        
        // Check if date is valid
        if (isNaN(dobDate.getTime())) {
          return res.status(400).json({ 
            error: "Invalid date format for Date of Birth. Please use YYYY-MM-DD format." 
          });
        }
        
        // Set to ISO format for Prisma
        dob = dobDate.toISOString();
      } catch (error) {
        return res.status(400).json({ 
          error: "Failed to parse Date of Birth. Please use YYYY-MM-DD format." 
        });
      }
    }

    // Fetch the villageId from family
    const family = await prisma.family.findUnique({
      where: { id: familyId },
      select: { villageId: true },
    });

    if (!family) {
      return res.status(404).json({ error: "Family not found" });
    }
    let hashedPassword = bcrypt.hashSync(password, 10);
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
        password: hashedPassword,
        phone,
        villageId: family.villageId, // Include villageId from family
      }
    });

    res.status(201).json(member);
  } catch (error: any) {
    // Don't call next(error) and then send a response - choose one
    console.error("Error creating member:", error);
    
    // Handle Prisma specific errors
    if (error.code === 'P2002') {
      const field = error.meta?.target?.[0] || 'field';
      return res.status(400).json({ 
        error: `A member with this ${field} already exists.`
      });
    }
    
    // If we've made it here, return a generic 500 error
    return res.status(500).json({ 
      error: "Internal Server Error",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

  getAllMembers = async (req: Request, res: Response, next: NextFunction) : Promise<Response | any> => {
  try {
    const members = await prisma.member.findMany();
    return res.json(members);
  } catch (error) {
    next(error);
  }
};

  getMemberById = async (req: Request, res: Response, next: NextFunction) : Promise<Response | any> => {
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

  updateMember = async (req: Request, res: Response, next: NextFunction):Promise<Response | any> => {
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

  deleteMember = async (req: Request, res: Response, next: NextFunction):Promise<Response | any> => {
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

}export default MemberController;