const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class UserCostume extends Model {}

UserCostume.init(
    {
        userCostume_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER
           /* references: {
                model: 'User',
                key: 'user_id',
            },*/
        },
        costume_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Costume',
                key: 'costume_id',
            },
        },
        scary_boolean: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            primaryKey: true,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'UserCostume',
    }
);

module.exports = UserCostume;