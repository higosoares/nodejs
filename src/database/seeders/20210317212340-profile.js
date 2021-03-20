'use strict';
const { v4: uuidv4 } = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('profiles', [{
      id: uuidv4(),
      name: 'Administrador'
    }, {
      id: uuidv4(),
      name: 'Comum'
    }])
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('profiles', null, {})
  }
}
