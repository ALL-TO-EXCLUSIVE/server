import express from "express";
import { createMember } from "../controllers/memberController";

const router = express.Router();
router.post("/", createMember);
export default router;
