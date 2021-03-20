/** @param { import ('express').Express } app */
module.exports = (app) => {
  const controller = app.app.controllers

  app.get('/profiles', controller.ProfileController.list)
}
