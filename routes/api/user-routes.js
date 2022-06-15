const router = require('express').Router();
const { User } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    // access our user model and run .findAll() method
    User.findAll({
        attributes: { exclude: ['password'] }
    }) // User model possesses the findAll method because it was inherited through the sequelize model class || same as SELECT * FROM users;
        .then(dbUserData => res.json(dbUserData)) // sequelize is a JS promise-based library, meaning we can use .then() with all the model methods
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({ // passing where object as argument 
        attributes: { exclude: ['password'] },
        where: { // where option used to indicate we want to find a user where its id value equals whatever req.params.id is || SELECT * FROM users WHERE id = 1
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/users
router.post('/', (req, res) => {
    // expects {username: 'Lerantino', email: 'lerantino@gmail.com', password: 'password1234'}
    User.create({ // use create to pass in key/value pairs where the keys are what we defined in the User model || INSERT INTO users (username, email, password) VALUES ('Lerantino', 'leratino@gmail.com', 'password1234');
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /api/users/1
router.put('/:id', (req, res) => {
    // expects {username: 'Lerantino', email: 'lerantino@gmail.com', password: 'password1234'}

    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    User.update(req.body, { // combines looking up and creating data || UPDATE users SET username = 'Lerantino', email = 'lerantino@gmail.com', password = 'newPassword1234' WHERE id = 1
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData[0]) {
                res.status(404).json({ message: 'No user found with this id' })
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' })
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;