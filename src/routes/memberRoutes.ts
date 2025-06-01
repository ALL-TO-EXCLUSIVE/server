import express from "express";
import { createMember, getMemberById, updateProfilePhoto } from "../controllers/memberController";
import { authenticate } from "../middlewares/authMiddleware";
import { upload } from "../config/multer";

const router = express.Router();

router.post("/", createMember);
router.get("/:id", authenticate, getMemberById);
router.post("/:id/photo", authenticate, upload.single('image'), updateProfilePhoto);

export default router;