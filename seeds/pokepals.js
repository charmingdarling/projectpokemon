const sequelize = require('../config/connection');
const { Pokedex, User } = require('../models');

const pokepalSeedData = require('./pokepalSeedData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const pokedex of pokepalSeedData) {
    await Pokedex.create({
      ...pokedex,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  process.exit(0);
};
seedDatabase();
