const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes); // <- The way we hit the route, we have to call this in Insomnia and
// router.use('/projects', projectRoutes);

module.exports = router;
