require('dotenv').config()
require('./database/index.js')

const express = require('express')
const consign = require('consign')

const app = express();

app.disable('x-powered-by')

consign({
  cwd: 'src',
  verbose: process.env.APP_DEBUG === 'true' || false,
  locale: 'pt-br'
})
.include('./app/middlewares/globals')
.then('./app/controllers')
.then('./routes')
.then('./app/middlewares')
.into(app)

module.exports = app
