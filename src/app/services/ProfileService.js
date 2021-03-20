const ProfileRepository = require('../repositories/ProfileRepository')

class ProfileService {
  list() {
    return ProfileRepository.list()
  }

  /** @param { BigInteger } id **/
  find(id) {
    return ProfileRepository.find(id)
  }
}

module.exports = new ProfileService()
