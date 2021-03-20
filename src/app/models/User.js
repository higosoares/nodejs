const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(connection) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          max: 255,
          notEmpty: {
            msg: 'Name cannot be empty',
          },
          len: {
            max: 'Name cannot be more than 255 caracters'
          }
        },
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1, 3],
          notEmpty: {
            msg: 'Age cannot be empty',
          },
          len: {
            msg: 'Age cannot be more than 3 caracters'
          }
        },
      },
    }, {
      sequelize: connection,
      tableName: 'users',
    })
  }

  static associate(models) {
    this.belongsTo(models.Profile, { foreignKey: 'profile_id', as: 'profile' })
  }
}

module.exports = User
