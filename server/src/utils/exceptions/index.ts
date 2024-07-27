import { Response } from "express";

import ExceptionType from "./exceptionTypes";

import {
  UserNotFoundException,
  InvalidCredentialsException,
} from "./LoginException";
import StatusCode from "../http-status-code";

function handleException(res: Response, error: Error) {
  const errorName = error.name;

  switch (errorName) {
    case ExceptionType.UserNotFound:
      res.statusCode = 400;
      res.send({ message: error.message });
    case ExceptionType.InvalidCredentials: {
      res.statusCode = 400;
      res.send({ message: error.message });
    }
    default: {
      res.statusCode = StatusCode.InternalError;
      res.send({ message: `Exception: ${error.name} - ${error.message}` });
    }
  }
}

export { handleException, UserNotFoundException, InvalidCredentialsException };
