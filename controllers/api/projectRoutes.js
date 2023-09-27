const router = require('express').Router();
const { Pokedex, User } = require('../../models'); // importing pokedex
const withAuth = require('../../utils/auth');

// This is where we are doing the PokedexRoutes.js
// GETS ALLLLLL of the Pokedex, look in Insomnia
router.get('/', async (req, res) => {
  try {
    const newPokedexData = await Pokedex.findAll({
      attributes: [
        'id',
        'name',
        'hp',
        'evolving_level',
        'attacks',
        'defense',
        // 'rest',
        // 'specials',
        // 'is_evolved',
      ], // from the Pokedex model
      include: [
        {
          model: User, // must be capital because relating the model
          attributes: ['username'],
        },
      ],
    });
    if (!newPokedexData) {
      res.status(404).json(err);
    }
    res.status(200).json(newPokedexData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get route for retrieving a single post
router.get('/:id', async function (req, res) {
  try {
    const newPokedexData = await Pokedex.findOne({
      where: {
        id: req.params.id,
      },
      attributes: [
        'id',
        'name',
        'hp',
        'evolving_level',
        'attacks',
        'defense',
        // 'rest',
        // 'specials',
        // 'is_evolved',
      ], // from the Pokedex model
      include: [
        {
          model: User, // must be capital because relating the model
          attributes: ['username'],
        },
      ],
    });
    if (!newPokedexData) {
      res.status(404).json(err);
    }
    res.status(200).json(newPokedexData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/test/:id', async (req, res) => {
//   try {
//     const datafromDB = [
//       { name: 'hello', something: 'else' },
//       { name: 'hello', something: 'else' },
//       { name: 'hello', something: 'else' },
//       { name: 'hello', something: 'else' },
//     ];
//     res.json(datafromDB);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newProject = await Project.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newProject);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const projectData = await Project.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!projectData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(projectData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
