import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger.js";
import { timeStamp } from "console";
import ErrorResponse from "../utils/ErrorResponse.js";

export const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction):any => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error!!";
    console.log("error",err)
    logger.log('error', err.message,{method:req.method,url:req.url,timeStamp:new Date()});

    return res
      .status(statusCode)
      .json({sucess:false,statusCode, message,})
  }