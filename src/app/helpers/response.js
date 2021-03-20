const { NotFound, UnauthorizedError, BadRequest } = require('../exceptions')

const messages = {
  MESSAGE_BAD_REQUEST: 'Bad request',
  MESSAGE_NOT_FOUND: 'Not found',
  MESSAGE_UNAUTHORIZED: 'Unauthorized - Invalid Token',
  MESSAGE_SERVER_ERROR: 'Server Error'
}

const codes = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST:400,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  SERVER_ERROR: 500,
}

const getMessage = (exception) => {
  if (exception instanceof NotFound) {
    return `${messages.MESSAGE_NOT_FOUND} ${exception.message}`
  }
  if (exception instanceof UnauthorizedError) {
    return messages.MESSAGE_UNAUTHORIZED
  }
  if (exception instanceof BadRequest) {
    return exception.message
  }

  return messages.MESSAGE_SERVER_ERROR
}

const getCode = (exception) => {
  if (exception instanceof NotFound) {
    return codes.NOT_FOUND
  }
  if (exception instanceof UnauthorizedError) {
    return codes.UNAUTHORIZED
  }
  if (exception instanceof BadRequest) {
    return codes.BAD_REQUEST
  }

  return codes.SERVER_ERROR
}

const json = (res, status, data) => {
  return res.status(status).json({ status: status, data: data })
}

module.exports = {
  messages,
  codes,
  getCode,
  getMessage,
  json,
  NotFound,
  UnauthorizedError,
  BadRequest
}

