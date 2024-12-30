import { NextFunction, Request, Response } from "express";
import Library from "../models/library.models.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import ApiResponse from "../utils/ApiResponse.js";



export const registerLibrary = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

    const { name, email, address, adminName, licienceNo } = req.body
    console.log("body", req.body)

    if (name?.trim() == "" || email?.trim() == "" || address?.trim() == "" || adminName?.trim() == "" || licienceNo?.trim() == "") {
        return next(new ErrorResponse(400, "All fields are required"));
    }

    try {

        const createdlibrary = await Library.create({
            lib_name: name,
            lib_email: email,
            lib_admin: adminName,
            lib_location: address,
            lib_licence: licienceNo


        })
        if (!createdlibrary) {
            return next(new ErrorResponse(400, "Failed to create library"))
        }
        return res.status(201).json(new ApiResponse<string>(201, createdlibrary.lib_name, "Library Created Successfully"))
    } catch (error) {
        const x = error as Error
        return next(new ErrorResponse(500, x.message));
        console.log(error)

    }
}