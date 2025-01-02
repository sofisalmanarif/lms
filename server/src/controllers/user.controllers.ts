import { NextFunction, Request, Response } from "express";
import User from "../models/user.models.js";
import ApiResponse from "../utils/ApiResponse.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import { uploadOnCloudniary } from "../utils/cloudniary.js";
import fs from "fs/promises";
import multer from "multer";
import { userType } from "../types/user.types.js";

const registerUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<any> => {
    try {
        const { userName, email, password, libId } = req.body;
        const file = req.file;
        if (
            userName.trim() == "" ||
            email.trim() == "" ||
            password.trim() == "" ||
            libId.trim() == ""
        ) {
            return next(new ErrorResponse(400, "All fields are required"));
        }
        if (!file) {
            return next(new ErrorResponse(400, "Please upload a file"));
        }

        uploadOnCloudniary(file.path)
            .then(async (cloudniaryres) => {
                console.log("cloudniaryres", cloudniaryres);
                const user = await User.create({
                    userName,
                    email,
                    password,
                    libId,
                    validDocument: cloudniaryres?.url,
                });

                if (!user) {
                    return next(
                        new ErrorResponse(400, "Failed to create library")
                    );
                }

                return res
                    .status(201)
                    .json(
                        new ApiResponse<string>(
                            201,
                            user.userName,
                            "User Created Successfully"
                        )
                    );
            })
            .catch((error) => {
                return next(new ErrorResponse(400, error.message));
            })
            .finally(async () => {
                console.log("finally");
                await fs.unlink(file.path);
            });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const loginUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<any> => {
    try {
        const { email, password } = req.body;
        console.log("body", req);
        if (!email || !password) {
            return next(
                new ErrorResponse(400, "Please provide email and password")
            );
        }

        const user = await User.findOne({ email });
        if (!user) {
            return next(new ErrorResponse(400, "Invalid Cradentials"));
        }

        const isPasswordCorrect = await user.isPasswordCorrect(password);
        if (!isPasswordCorrect) {
            return next(new ErrorResponse(400, "Invalid Cradentials"));
        }

        if (!user.isVerified) {
            return next(new ErrorResponse(400, "You are not Verified yet"));
        }

        const authToken = user.generateJwtToken();
        console.log(authToken);

        return res
            .status(200)
            .cookie("auth-token", authToken, {
                httpOnly: true,
                secure: true,
                maxAge: 900000,
            })
            .json(
                new ApiResponse<{ "auth-token": string }>(
                    200,
                    { "auth-token": authToken },
                    "Login SuccessFull"
                )
            );
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const logoutUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<any> => {
    try {
        return res
            .status(200)
            .clearCookie("auth-token")
            .json(
                new ApiResponse<string>(
                    200,
                    "Logged Out Successfully",
                    "Logged Out Successfully"
                )
            );
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const getMyProfile = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<any> => {
    try {
        const user = await User.findById(req.user).select("-password");
        console.log(user);
        if (!user) {
            return next(new ErrorResponse(404, "User Not Found"));
        }
        return res
            .status(200)
            .json(new ApiResponse<userType>(200, user, "User Profile"));
    } catch (error) {
        console.log(error);
        next(error);
    }
};




export { registerUser, loginUser, logoutUser, getMyProfile };
