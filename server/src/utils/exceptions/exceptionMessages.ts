import ExceptionType from "./exceptionTypes";

const exceptionMessages = {
  [ExceptionType.UserNotFound]: "User not found",
  [ExceptionType.InvalidCredentials]: "Invalid credentials",

  [ExceptionType.NotImplemented]: "Not implemented",
};

export default exceptionMessages;
