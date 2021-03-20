const controller = require('./Controller')
const service = require('../services/UserService')

class UserController {

  async list(_, res) {
    try {
      const users = await service.list()

      return controller.response.json(res, controller.response.codes.OK, users)
    } catch (err) {
      next(err)
    }
  }

  async listByName(req, res) {
    try {
      const { name } = req.params
      const users = await service.listByName(name)

      return controller.response.json(res, controller.response.codes.OK, users)
    } catch (err) {
      next(err)
    }
  }

  async listByProfile(req, res) {
    try {
      const { name_profile } = req.params
      const users = await service.listByProfile(name_profile)

      return controller.response.json(res, controller.response.codes.OK, users)
    } catch (err) {
      next(err)
    }
  }

  async create(req, res, next) {
    try {
      const { name, age, profile_id } = req.body
      const user = await service.create(profile_id, { name, age })

      return controller.response.json(res, controller.response.codes.CREATED, user.id)
    } catch (err) {
      next(err)
    }
  }

  async update(req, res, next) {
    try {
      const { user_id } = req.params
      const { name, age, profile_id } = req.body
      await service.update(user_id, profile_id, { name, age })

      return controller.response.json(res, controller.response.codes.OK, user_id)
    } catch (err) {
      next(err)
    }
  }

  async delete(req, res, next) {
    try {
      const { user_id } = req.params
      await service.delete(user_id)

      return controller.response.json(res, controller.response.codes.OK, user_id)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new UserController()
