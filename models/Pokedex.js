const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pokedex extends Model{}

Pokedex.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hp: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        evolving_level: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        attacks: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        defense: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        is_Evolved: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'pokedex',
        freezeTableName: true 
    }
);

module.exports = Pokedex;