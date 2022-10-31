const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    /*costume_choice: {
      type: DataTypes.BOOLEAN
      references: {
        model: 'UserCostume',
        key: 'scary_boolean',
      },
  },*/
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
