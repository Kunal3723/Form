import express from "express";
import auth from "../middleware/auth.js";
import { createInfo, deleteInfo, fetchInfo } from "../controllers/info.js";
const router = express.Router();

router.post("/", auth, createInfo);
router.get("/", fetchInfo);
router.delete("/:id", auth, deleteInfo);

export default router;