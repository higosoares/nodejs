const User = require('../models/User')
const Profile = require('../models/Profile')
const UserRepository = require('../repositories/UserRepository')
const ProfileService = require('./ProfileService')

class UserService {
  list() {
    return UserRepository.list()
  }

  /** @param { string } name **/
  listByName(name) {
    return UserRepository.listByName(name)
  }

  /** @param { string } name **/
  listByProfile(name) {
    return UserRepository.listByProfile(name)
  }

    /** @param { BigInteger } id **/
  find(id) {
    return UserRepository.find(id)
  }

  /**
   *
   * @param { Profile } profile_id
   * @param { object } params
   * @returns
   */
  async create(profile_id, params) {
    const profile = await ProfileService.find(profile_id)
    if (!profile) throw Error('Profile not found!')

    return UserRepository.create(profile, params)
  }

  /**
   *
   * @param { User } user_id
   * @param { Profile } profile_id
   * @param { object } params
   */
  async update(user_id, profile_id, params) {
    const user = await UserRepository.find(user_id)
    if (!user) throw Error('User not found!')
    const profile = await ProfileService.find(profile_id)
    if (!profile) throw Error('Profile not found!')

    return UserRepository.update(user, profile, params)
  }

  /** @param { User } user_id **/
  async delete(user_id) {
    const user = await UserRepository.find(user_id)
    if (!user) throw Error('User not found!')

    return UserRepository.delete(user)
  }
}

module.exports = new UserService()
