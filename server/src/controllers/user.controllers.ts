import { NextFunction, Request, Response } from "express";
import User from "../models/user.models.js";
import ApiResponse from "../utils/ApiResponse.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import { uploadOnCloudniary } from "../utils/cloudniary.js";
import fs from "fs/promises"
import multer from "multer";

const registerUser =async(req:Request,res:Response,next:NextFunction):Promise<any>=>{

    try {
        const {userName,email,password,libId,} = req.body
        const file = req.file
        if (userName.trim() == "" || email.trim() == "" || password.trim() == "" || libId.trim() == "") {
            return next(new ErrorResponse(400, "All fields are required"));
        }
        if (!file) {
            return next(new ErrorResponse(400, "Please upload a file"))
        }

        uploadOnCloudniary(file.path).then(async (cloudniaryres) => {
            console.log("cloudniaryres", cloudniaryres)
            const user = await User.create({
                userName,
                email,
                password,
                libId,
                validDocument: cloudniaryres?.url
            })
            
            if (!user) {
                return next(new ErrorResponse(400, "Failed to create library"))
            }
            
            return res.status(201).json(new ApiResponse<string>(201,user.userName,"User Created Successfully"))
        })
            .catch((error) => {
                return next(new ErrorResponse(400, error.message))
            })
            .finally(async () => {
                console.log("finally")
                await fs.unlink(file.path)
            })
    
        
    } catch (error) {
        const err = error as Error
        console.log(err)
        if (err instanceof multer.MulterError) {
            return next(new ErrorResponse(500, err.message));
        }
        return next(new ErrorResponse(500, err.message));
        
    }

}


const loginUser = async(req:Request,res:Response,next:NextFunction):Promise<any>=>{
    try {
        const {email,password} = req.body
        if (!email || !password) {
            return next(new ErrorResponse(400, "Please provide email and password"))
            }

       const  userFound=  await User.findOne({email})
       if(!userFound){
        return next(new ErrorResponse(400,"Invalid Cradentials"))
       }

       const isPasswordCorrect = await userFound.isPasswordCorrect(password)
       if(!isPasswordCorrect){
           return next(new ErrorResponse(400,"Invalid Cradentials"))
        }

        if(!userFound.isVerified){
            return next(new ErrorResponse(400,"You are not Verified yet"))
         }

        const authToken = userFound.generateJwtToken()
        console.log(authToken)

       return res
       .status(200)
       .cookie("auth-token",authToken,{
        httpOnly:true,
        secure:true,
        maxAge: 900000
       })
       .json(new ApiResponse<{"auth-token":string}>(200,{"auth-token":authToken},"Login SuccessFull"))
        
    } catch (error) {
        const err = error as Error
        console.log(err)
        return next(new ErrorResponse(500,err.message))
        
    }
}


export {registerUser,loginUser}