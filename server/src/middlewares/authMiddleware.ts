import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import ErrorResponse from "../utils/ErrorResponse.js";
import { JwtPayload } from "../types/user.types.js";


export const isLoggedin = (req:Request, res:Response, next:NextFunction):void => {
  try {
    const token  = req.cookies["auth-token"] ||  req.headers.authorization?.split(" ")[1]
    if(!token){
        return next(new ErrorResponse(401, "You are not Logged In"))
    }

    const decodedToken = jwt.verify(token,process.env.JWT_SECRET!) as JwtPayload 
    console.log(decodedToken) 
    req.user=decodedToken._id
    next()
  } catch (error) {
    next(error)
  }

}



