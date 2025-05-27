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
