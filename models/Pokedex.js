const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pokedex extends Model {}

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
    // //! MARK HELP US, PLEASE. DOES THIS NEED TO BE A BOOLEAN? OR TINY INT?
    // is_evolved: {
    //   type: DataTypes.BOOLEAN,
    // },
    // Allows for the user to create a relationship, establish parent>child relationship > without it the 2 models are strangers. Need to be joined.
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'pokedex',
    freezeTableName: true,
  }
);

module.exports = Pokedex;
