import express from "express";
import { MemberController } from "../controllers/memberController";
import { authenticate } from "../middlewares/authMiddleware";
import { upload } from "../config/multer";

const router = express.Router();
const memberController = new MemberController();
router.post("/", memberController.createMember);
router.get("/:id", authenticate, memberController.getMemberById);
router.post("/:id/photo", 
  authenticate, // Ensure this runs first
  upload.single('image'),
  memberController.updateProfilePhoto
);

export default router;