const path = require('path');
const express = require('express');
const session = require('express-session'); // Doing logged in state, sends cookies automatically
const exphbs = require('express-handlebars'); //
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
// const SequelizeStore = Captures current user login to your website, you can track their activity (prevents/track hacking)
const SequelizeStore = require('connect-session-sequelize')(session.Store); // Connects sequelize to sessions

//req.session = computer memory
//SequelizeStore is in the database

// if you exit the server, all the user info/history will be in the USER model, so it's not lost
// if it is is the session, once closed/disconnected, it's lost/deleted

const app = express();
const PORT = process.env.PORT || 3001; // JS says the left of || so then use right side

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers }); // Helpers are passed in (view-helpers, formatting dates/currencies) UTILS folder

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine); // telling handlebars IS the hbs.engine
app.set('view engine', 'handlebars'); // telling view engine IS handlebars >> Looks where to look and what to get

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening ' + PORT));
});
