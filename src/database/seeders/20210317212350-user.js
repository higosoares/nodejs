'use strict';
const { v4: uuidv4 } = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const job = await queryInterface.sequelize.query(
      `SELECT id from profiles where name = 'Comum' limit 1`
    , { type: Sequelize.QueryTypes.SELECT })

    await queryInterface.bulkInsert('users', [{
      id: uuidv4(),
      name: 'Higo Soares',
      age: 25,
      profile_id: job[0].id,
      createdAt: new Date(),
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  }
}
