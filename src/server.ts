import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes"
import villageRoutes from "./routes/villageRoutes";
import familiesRouter from "./routes/familyRoutes";
import membersRouter from "./routes/memberRoutes";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from 'path';
import fs from 'fs';
import { securityMiddleware } from './middlewares/security';
import { errorHandler } from './middlewares/errorHandler';
import { Request, Response, NextFunction } from 'express';
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

export const isDev = process.env.NODE_ENV !== 'production';
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:8080';
console.log(isDev)
app.use(cors({
  origin: isDev 
    ? ['http://localhost:3000', 'http://localhost:8080']
    : ['https://parejiyaparivar.org'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(cookieParser());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '../uploads/profiles');
if (!fs.existsSync(uploadsDir)){
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Remove json parser for /api/members/:id/photo route
app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl.includes('/api/members') && req.originalUrl.includes('/photo')) {
    next();
  } else {
    express.json()(req, res, next);
  }
});

// Apply security middleware
app.use(securityMiddleware);

// Route handlers
app.use("/api/auth", authRoutes);
app.use("/api/villages", villageRoutes);
app.use("/api/families", familiesRouter);
app.use("/api/members", membersRouter);

// Error handler should be last
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
