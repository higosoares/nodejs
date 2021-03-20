const controller = require('./Controller')
const service = require('../services/ProfileService')

class ProfileController {
  async list(_, res, next) {
    try {
      const profiles = await service.list()

      return controller.response.json(res, controller.response.codes.OK, profiles)
    } catch(err) {
      next(err)
    }
  }
}

module.exports = new ProfileController()
