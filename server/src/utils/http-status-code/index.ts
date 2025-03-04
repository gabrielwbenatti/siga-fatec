enum StatusCode {
  // 2XX - Succesful
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,

  // 4XX - Client error
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUNT = 404,

  // 5XX - Server error
  INTERNAL_ERROR = 500,
  NOT_IMPLEMENTED = 501,
}

export default StatusCode;
