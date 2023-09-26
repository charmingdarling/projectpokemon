const sequelize = require('../config/connection');

const Pokedex = require('../models/Pokedex');

const pokepalSeedData = require('./pokepalSeedData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Pokedex.bulkCreate(pokepalSeedData);
};

for (const user of userData) {
  await User.create({
    ...user,
  });

  process.exit(0);
}

seedDatabase();
