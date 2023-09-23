const sequelize = require('../config/connection');

const Pokedex = require('../models/Pokedex');

const pokepalSeedData = require('./pokepalSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await Pokedex.bulkCreate(pokepalSeedData);
};

seedDatabase();