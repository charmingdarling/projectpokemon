const User = require('./User');
const Pokedex = require('./Pokedex');

// One parent can have many pokedex.
// One User can have many pokdex.

User.hasMany(Pokedex, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Pokedex belongs to the "parent" User.
Pokedex.belongsTo(User, {
  // Linking
  foreignKey: 'user_id',
});

module.exports = { User, Pokedex };

// Model saves the data
// When it saves the data, then you can CRUD
// Use API routes off CRUD to do model
// Use HTML routes off the webpage so user can perform CRUD
