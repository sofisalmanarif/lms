import express from "express";
import {  notVarifiedLibraries, registerLibrary, varifiedLibraries, verifyLibrary } from "../controllers/library.controllers.js";
import { upload } from "../middlewares/multer.js";
import { isLoggedin } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/checkIsAdmin.js";
import { isSuperAdmin } from "../middlewares/checkIsSuperAdmin.js";

const router = express.Router()


router.post("/register",upload.single("validDocument"),registerLibrary)
router.put("/verify-library/:id",isSuperAdmin,verifyLibrary)
router.get("/library-requests",isLoggedin,notVarifiedLibraries)
router.get("/varified-libraries",isAdmin,varifiedLibraries)


export default router