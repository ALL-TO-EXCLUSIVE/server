import express from "express";
import {
  getAllVillages,
  getVillageById,
  createVillage,
  updateVillage,
  deleteVillage,
} from "../controllers/villageController";

const router = express.Router();

router.get("/", getAllVillages);
router.get("/:id", getVillageById);
router.post("/", createVillage);
router.put("/:id", updateVillage);
router.delete("/:id", deleteVillage);

export default router;
