import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import ErrorResponse from "../utils/ErrorResponse.js";
import { JwtPayload, Role } from "../types/user.types.js";


export const isAdmin = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const token = req.cookies["auth-token"] || req.headers.authorization?.split(" ")[1]
    if (!token) {
      return next(new ErrorResponse(401, "You are not Logged In"))
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload
    console.log(decodedToken)
    if (decodedToken.role !== Role.Admin) {
      return next(new ErrorResponse(403, "You are not an admin"))
    }
    next()
  } catch (error) {
    next(error)
  }

}



