/** @param { import ('express').Express } app */
module.exports = (app) => {
  const controller = app.app.controllers

  app.get('/users', controller.UserController.list)
  app.get('/users/:user_id/id', controller.UserController.find)
  app.get('/users/:name', controller.UserController.listByName)
  app.get('/users/:name_profile/profiles', controller.UserController.listByProfile)
  app.post('/users', controller.UserController.create)
  app.post('/users/:user_id', controller.UserController.update)
  app.delete('/users/:user_id', controller.UserController.delete)
  }
