// src/routes/authRoutes.ts
import { Router, Request, Response, NextFunction } from "express";
import {getMe, login, logout} from "../controllers/authController";
import { authenticate, authorize } from "../middlewares/authMiddleware";
// import { login } from "@/controllers/authControlle2";

const router = Router();

router.post("/login", login);
router.post("/logout",logout);
router.get("/me",authenticate,getMe);
export default router;
