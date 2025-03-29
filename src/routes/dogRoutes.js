import express from "express";
import {
  addDog,
  getDogs,
  getDog,
  deleteDog,
  updateDog,
} from "../controllers/dogController.js";

const router = express.Router();

router.post("/add", addDog);
router.get("/", getDogs);
router.get("/:id", getDog);
router.delete("/:id", deleteDog);
router.put("/:id", updateDog);
export default router;
