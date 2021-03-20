const { Model, DataTypes } = require("sequelize");

class Profile extends Model {
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
            msg: 'Name cannot be more than 255 caracters'
          }
        },
      }
    }, {
      sequelize: connection,
      tableName: 'profiles',
      timestamps: false,
    })
  }

  static associate(models) {
    this.hasMany(models.User, { foreignKey: 'profile_id', as: 'users'})
  }
}

module.exports = Profile
