import express from "express";
import { createFamily } from "../controllers/familyController";

const router = express.Router();
router.post("/", createFamily);
export default router;
