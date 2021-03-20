'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('profiles', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('profiles');
  }
};
