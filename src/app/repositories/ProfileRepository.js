const Profile = require('../models/Profile')

class ProfileRepository {
  list() {
    return Profile.findAll({
      include: {
        association: 'users'
      }
    })
  }

  find(id) {
    return Profile.findByPk(id)
  }
}

module.exports = new ProfileRepository()
