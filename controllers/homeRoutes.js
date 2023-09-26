const router = require('express').Router();
const { Pokedex, User } = require('../models');
const withAuth = require('../utils/auth');

// if you want to return HTML it should go in homeRoutes

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      // logged_in: req.session.logged_in,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    res.render('login', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/battle', async (req, res) => {
  try {
    res.render('battlePage', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
// '/profile' is a webpage that allows to add the user information, must be logged in
// withAuth validates if you are logged in or not, but if logged in, then you do async (req, res) to obtain handlebars access
// Handlebars has a single template called 'main'
// When calling HTML routes > calling INDIVIDUAL webpages, each route is unique webpage
// http://localhost:3001/profile <- HTML route, unique  line 69
// render is the webpage assembler
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // If you are logged_in and it is true, then it executes the if statement, in this case '/profile',
  // but if it is false, memory storage is empty (if ever logged out), then it forces 'res.render('login)
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
