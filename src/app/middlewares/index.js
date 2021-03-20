const response = require('../helpers/response')

const handlerErrors = (err, req, res, next) => {
  if (process.env.APP_ENV === 'production') {
    return response.json(res, response.getCode(err), response.getMessage(err))
  }

  return response.json(res, response.getCode(err), err.message)
}

const handler = (req, res, next) => {
  if (!req.route) {
    const exception = new response.NotFound(req.originalUrl)

    return response.json(res, response.getCode(exception), response.getMessage(exception))
  }

  next()
}

/** @param { import ('express') .Express} app */
module.exports = (app) => {
  app.use(handler)
  app.use(handlerErrors)
}
