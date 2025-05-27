import { Request, Response, NextFunction} from "express";
import { prisma } from "../lib/prisma";

export const getAllVillages = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
  try {
    const villages = await prisma.village.findMany({
      include: {
        members: true,
        admins: true,
        families: true,
      },
    });
    res.json(villages);
  } catch (error) {
    next(error);
    console.error("Error fetching villages:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getVillageById = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
  const id = req.params.id;
  try {
    const village = await prisma.village.findUnique({
      where: { id },
      include: {
        members: true,
        admins: true,
        families: true,
      },
    });
    if (!village) {
      return res.status(404).json({ error: "Village not found" });
    }
    res.json(village);
  } catch (error) {
    next(error);
    console.error("Error fetching village:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createVillage = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
  const { name } = req.body;
  try {
    const newVillage = await prisma.village.create({
      data: { name },
    });
    res.status(201).json(newVillage);
  } catch (error) {
    next(error);
    console.error("Error creating village:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateVillage = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
  const id = req.params.id;
  const { name } = req.body;
  try {
    const updated = await prisma.village.update({
      where: { id },
      data: { name },
    });
    res.json(updated);
  } catch (error) {
    next(error);
    console.error("Error updating village:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteVillage = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
  const id = req.params.id;
  try {
    await prisma.village.delete({ where: { id } });
    res.json({ message: "Village deleted" });
  } catch (error) {
    next(error);
    console.error("Error deleting village:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
