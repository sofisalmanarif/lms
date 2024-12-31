import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger.js";

export const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction):any => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error!!";
    logger.log('error', err.message, err.message);

    return res
      .status(statusCode)
      .json({sucess:false,statusCode, message,});
  }