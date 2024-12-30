import express from "express";
import { registerLibrary } from "../controllers/library.controllers.js";

const router = express.Router()

router.post("/register",registerLibrary)

export default router