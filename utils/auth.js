const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    // <Checks if logged in or not
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
