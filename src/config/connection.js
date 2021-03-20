require('dotenv').config()

module.exports = {
  dialect: process.env.DB_DIALECT,
  storage: process.env.DB_STORAGE,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscore: true,
  }
}
