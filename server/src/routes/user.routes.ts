import express from "express";
import { upload } from "../middlewares/multer.js";
import {  getAllverifiedUsers, getMyProfile, getUserRequests, loginUser, logoutUser, registerUser, verifyUser } from "../controllers/user.controllers.js";
import { isLoggedin } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/checkIsAdmin.js";

const router = express.Router()


router.post("/register",upload.single("validDocument"),registerUser)
router.post("/login",loginUser)
router.get("/logout",isLoggedin,logoutUser)
router.get("/profile", isLoggedin, getMyProfile)
router.get("/get-user-requests", isAdmin, getUserRequests)
router.get("/get-all-verifiedusers", isAdmin, getAllverifiedUsers)
router.get("/verify-user/:id", isAdmin, verifyUser)



export default router