import { Request, Response, NextFunction } from "express";
import { ApiError } from "./api-error";
import StatusCode from "../utils/http-status-code";

interface ErrorResponse {
  status: string;
  message: string;
  stack?: string;
}

export const errorHandler = (
  err: Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = StatusCode.INTERNAL_ERROR;
  let message = "Something wrong";

  if ("statusCode" in err) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof Error) {
    message = err.message;
  }

  const response: ErrorResponse = {
    status: "error",
    message,
  };

  console.log(response);
  return res.status(statusCode).json(response);
};
