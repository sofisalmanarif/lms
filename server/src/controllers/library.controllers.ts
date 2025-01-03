import { NextFunction, Request, Response } from "express";
import Library from "../models/library.models.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import ApiResponse from "../utils/ApiResponse.js";
import { LibraryType } from "../types/library.js";
import { uploadOnCloudniary } from "../utils/cloudniary.js";
import fs from "fs/promises";
import User from "../models/user.models.js";
import { Role } from "../types/user.types.js";

const registerLibrary = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<any> => {
    try {
        const { name, email, address, adminName, licienceNo } = req.body;
        const file = req.file;

        console.log("body", req.body);
        console.log(req.file?.path);

        if (
            name.trim() == "" ||
            email.trim() == "" ||
            address.trim() == "" ||
            adminName.trim() == "" ||
            licienceNo.trim() == ""
        ) {
            return next(new ErrorResponse(400, "All fields are required"));
        }

        if (!file) {
            return next(new ErrorResponse(400, "Please upload a file"));
        }
        uploadOnCloudniary(file.path)
            .then(async (cloudniaryres) => {
                console.log("cloudniaryres", cloudniaryres);
                const createdlibrary = await Library.create({
                    lib_name: name,
                    lib_email: email,
                    lib_admin: adminName,
                    lib_location: address,
                    lib_licence: licienceNo,
                    lib_docs: cloudniaryres?.url,
                });

                if (!createdlibrary) {
                    return next(
                        new ErrorResponse(400, "Failed to create library")
                    );
                }
                return res
                    .status(201)
                    .json(
                        new ApiResponse<string>(
                            201,
                            createdlibrary.lib_name,
                            "Library Created Successfully"
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

const notVarifiedLibraries = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<any> => {
    try {
        const libraries = await Library.find({ library_verified: false });

        return res
            .status(201)
            .json(
                new ApiResponse<LibraryType[]>(
                    201,
                    libraries,
                    "Library that are't varified"
                )
            );
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const varifiedLibraries = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<any> => {
    try {
        const libraries = await Library.find({ library_verified: true });
        return res
            .status(201)
            .json(
                new ApiResponse<LibraryType[]>(
                    201,
                    libraries,
                    "varified Libraries"
                )
            );
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const verifyLibrary = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<any> => {
    try {
        const verifiyLibrary = await Library.findById(req.params.id);
        if (!verifiyLibrary) {
            return next(new ErrorResponse(404, "Library not Found"));
        }

        if (verifiyLibrary.library_verified) {
            return next(new ErrorResponse(400, "Library is  Already Verified"));
        }

        verifiyLibrary.library_verified = true;
        await verifiyLibrary.save();
        const libAdmin = await User.create({
            userName: verifiyLibrary.lib_admin,
            email: verifiyLibrary.lib_email,
            password: "admin@123",
            validDocument: verifiyLibrary.lib_docs,
            role: Role.Admin,
            isVerified: true,
            libId: verifiyLibrary._id,
        });
        console.log(verifiyLibrary, libAdmin);
        return res
            .status(200)
            .json(
                new ApiResponse<LibraryType>(
                    200,
                    verifiyLibrary,
                    `${verifiyLibrary.lib_name} is now Verified And admin name is ${libAdmin.userName}`
                )
            );
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export {
    registerLibrary,
    notVarifiedLibraries,
    varifiedLibraries,
    verifyLibrary,
};
