enum StatusCode {
  // 2XX - Succesful
  Ok = 200,
  Created = 201,
  NoContent = 204,

  // 4XX - Client error
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,

  // 5XX - Server error
  InternalError = 500,
  NotImplemented = 501,
}

export default StatusCode;
