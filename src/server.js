const app = require('./app')

app.listen(process.env.APP_PORT, () => {
  console.log(`Server running at http://${process.env.DB_HOST || 'localhost'}:${process.env.APP_PORT}/`)
})
