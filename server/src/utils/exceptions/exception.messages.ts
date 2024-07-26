import ExceptionType from "./exception.type";

const exceptionMessages = {
  [ExceptionType.UserNotFound]: "User not found",
  [ExceptionType.InvalidCredentials]: "Invalid credentials",
};

export default exceptionMessages;
