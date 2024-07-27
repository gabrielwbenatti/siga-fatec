import ExceptionType from "./exceptionTypes";

const exceptionMessages = {
  [ExceptionType.UserNotFound]: "User not found",
  [ExceptionType.InvalidCredentials]: "Invalid credentials",
};

export default exceptionMessages;
