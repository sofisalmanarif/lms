import { NextFunction, Request, Response } from "express";
import User from "../models/user.models.js";
import ApiResponse from "../utils/ApiResponse.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import { uploadOnCloudniary } from "../utils/cloudniary.js";
import fs from "fs/promises";
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

const getUserRequests = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<any> => {
    try {
        const loggedInUser = await User.findById(req.user)
        if (!loggedInUser) {
            return next(new ErrorResponse(404, "User Not Found"))
        }

        const newUserRequests = await User.find({ $and: [{ libId: loggedInUser?.libId }, { isVerified: false }] }).select("-password");
        console.log(newUserRequests);
        return res
            .status(200)
            .json(new ApiResponse<userType[]>(200, newUserRequests, "Not Verified Users"));
    } catch (error) {
        console.log(error);
        next(error);
    }
};


const getAllverifiedUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<any> => {
    try {
        const loggedInUser = await User.findById(req.user)
        if (!loggedInUser) {
            return next(new ErrorResponse(404, "User Not Found"))
        }

        const allVerifiedUsers = await User.find({ $and: [{ libId: loggedInUser?.libId }, { role: "User" }, { isVerified: true }] }).select("-password");
        console.log(allVerifiedUsers);
        return res
            .status(200)
            .json(new ApiResponse<userType[]>(200, allVerifiedUsers, "All verified Users"));
    } catch (error) {
        console.log(error);
        next(error);
    }
};


const verifyUser = async (
    req: Request, 
    res: Response,
    next: NextFunction
): Promise<any> => {
    try {
        console.log(req.params.id)
        const loggedInUser = await User.findById(req.user)

        if (!loggedInUser) {
            return next(new ErrorResponse(404, "User Not Found"))
        }

        const verifiedUser = await User.findById(req.params.id).select("-password");
        if (!verifiedUser) {
            return next(new ErrorResponse(404, "User Not Found"))
        }

        if (!loggedInUser.libId.equals(verifiedUser.libId)) {
            // console.log(loggedInUser.libId.equals(verifiedUser.libId._id))
            return next(new ErrorResponse(400, "You Are not allowed to verify this user"))
        }

        if (verifiedUser.isVerified) {
            return next(new ErrorResponse(400, "User is Already Verified"))
        }

        verifiedUser.isVerified = true
        await verifiedUser.save()
        // console.log(verifiedUser);
        return res
            .status(200)
            .json(new ApiResponse<userType>(200, verifiedUser, `${verifiedUser.userName} is now Verified`));
    } catch (error) {
        console.log(error);
        next(error);
    }
};






export { registerUser, loginUser, logoutUser, getMyProfile, getUserRequests, getAllverifiedUsers, verifyUser };
