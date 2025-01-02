import express from "express";
import { upload } from "../middlewares/multer.js";
import { getMyProfile, loginUser, logoutUser, registerUser } from "../controllers/user.controllers.js";
import { isLoggedin } from "../middlewares/authMiddleware.js";

const router = express.Router()


router.post("/register",upload.single("validDocument"),registerUser)
router.post("/login",loginUser)
router.get("/logout",isLoggedin,logoutUser)
router.get("/profile",isLoggedin,getMyProfile)



export default router