class GeneralError extends Error {
  constructor(message) {
    super()
    this.message = message
  }
}

class NotFound extends GeneralError { }
class UnauthorizedError extends GeneralError { }
class BadRequest extends GeneralError { }

module.exports = {
  GeneralError,
  NotFound,
  UnauthorizedError,
  BadRequest
};
