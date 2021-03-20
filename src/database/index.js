const Sequelize  = require('sequelize')
const config = require('../config/connection')

const User = require('../app/models/User')
const Profile = require('../app/models/Profile')
const models = [User, Profile]

const connection = new Sequelize(config)

class Database {
  constructor() {
    this.init()
  }

  init() {
    models.map(model => model.init(connection))
    models.map(model => model.associate(connection.models))
  }
}

module.exports = new Database()
