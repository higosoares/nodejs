const User = require('../models/User')
const { Op } = require("sequelize")
const { v4: uuidv4 } = require('uuid')

class UserRepository {
  list() {
    return User.findAll({
      include: {
        association: 'profile'
      }
    })
  }

  listByName(name) {
    return User.findAll({
      where: {
        name: {
          [Op.substring] : name
        }
      },
      include: {
        association: 'profile'
      }
    })
  }

  listByProfile(name) {
    return User.findAll({
      include: {
        association: 'profile',
        where : {
          name: name
        }
      }
    })
  }

  find(id) {
    return User.findByPk(id)
  }

  create(profile, params) {
    return User.create({
      id: uuidv4(),
      name: params.name,
      age: params.age,
      profile_id: profile.id
    })
  }

  update(user, profile, params) {
    return User.update({
        name: params.name,
        age: params.age,
        profile_id: profile.id
      }, {
      where: {
        id: user.id
      }
    })
  }

  delete(user) {
    return User.destroy({
      where: {
        id: user.id
      }
    })
  }
}

module.exports = new UserRepository()
