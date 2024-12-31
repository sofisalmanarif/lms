import express from "express";
import {  notVarifiedLibraries, registerLibrary, varifiedLibraries } from "../controllers/library.controllers.js";
import { upload } from "../middlewares/multer.js";

const router = express.Router()


router.post("/register",upload.single("validDocument"),registerLibrary)
router.get("/library-requests",notVarifiedLibraries)
router.get("/varified-libraries",varifiedLibraries)


export default router