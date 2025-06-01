import { Role } from "@/generated/prisma";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

interface JWTPayload {
  id: string;
  role: Role;
}

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  try {
    // Check both Bearer token and cookie
    const authHeader = req.headers.authorization;
    const token = authHeader?.startsWith('Bearer ')
      ? authHeader.substring(7)
      : req.cookies?.token;

    if (!token) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
    (req as any).user = decoded;
    next();
  } catch (err) {
    console.error('Auth Error:', err);
    res.status(403).json({ message: "Invalid or expired token" });
  }
};

export const authorize = (roles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const user = (req as any).user as JWTPayload;
    
    if (!user || !roles.includes(user.role)) {
      res.status(403).json({ 
        message: "You don't have permission to access this resource" 
      });
      return;
    }
    
    next();
  };
};
