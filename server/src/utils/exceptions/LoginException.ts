import CustomException from "./CustomException";
import ExceptionType from "./exceptionTypes";

class UserNotFoundException extends CustomException {
  constructor() {
    super(ExceptionType.UserNotFound);
  }
}

class InvalidCredentialsException extends CustomException {
  constructor() {
    super(ExceptionType.InvalidCredentials);
  }
}

export { UserNotFoundException, InvalidCredentialsException };
