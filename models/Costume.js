const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Costume extends Model {}

Costume.init (
    {
        costume_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        costume_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        costume_filename:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'Costume',
    }
);

module.exports = Costume;