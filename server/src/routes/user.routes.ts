import express from "express";
import { upload } from "../middlewares/multer.js";
import { registerUser } from "../controllers/user.controllers.js";

const router = express.Router()


router.post("/register",upload.single("validDocument"),registerUser)



export default router