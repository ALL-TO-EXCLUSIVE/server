import { Request, Response, NextFunction } from "express";
import { prisma } from "../lib/prisma";
export const createFamily = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
  const { villageId } = req.body;

  if (!villageId) {
    return res.status(400).json({ error: "villageId is required" });
  }

  try {
    const family = await prisma.family.create({
      data: {
        villageId: villageId,
      },
    });

    res.status(201).json(family);
  } catch (error) {
    next(error);
    console.error("Error creating family:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllFamilies = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const families = await prisma.family.findMany({
      include: {
        members: true,
        village: true
      }
    });
    res.json(families);
  } catch (error) {
    next(error);
  }
};

export const getFamilyById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const family = await prisma.family.findUnique({
      where: { id },
      include: {
        members: true,
        village: true
      }
    });
    if (!family) {
      return res.status(404).json({ error: "Family not found" });
    }
    res.json(family);
  } catch (error) {
    next(error);
  }
};

export const updateFamily = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const family = await prisma.family.update({
      where: { id },
      data: updateData
    });
    res.json(family);
  } catch (error) {
    next(error);
  }
};

export const deleteFamily = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await prisma.family.delete({
      where: { id }
    });
    res.json({ message: "Family deleted successfully" });
  } catch (error) {
    next(error);
  }
};
