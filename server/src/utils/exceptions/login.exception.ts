import CustomException from "./custom.exception";
import ExceptionType from "./exception.type";

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
