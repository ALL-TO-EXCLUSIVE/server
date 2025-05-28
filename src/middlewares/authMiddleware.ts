import { Role } from "@/generated/prisma";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    (req as any).user = decoded; // You can add typing here if needed
    next();
  } catch (err) {
    res.status(403).json({ message: "Forbidden" });
  }
};
export const authorize =
  (roles: Role[]) =>
  (req: Request, res: Response, next: NextFunction) : any=> {
    const user = (req as any).user;
    if (!user || !roles.includes(user.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
