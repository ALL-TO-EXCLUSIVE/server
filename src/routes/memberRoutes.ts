import express from "express";
import { createMember, getMemberById } from "../controllers/memberController";
import { authenticate } from "../middlewares/authMiddleware";

const router = express.Router();
router.post("/", createMember);
router.get("/:id", authenticate, getMemberById)
export default router;
