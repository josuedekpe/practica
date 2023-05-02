const User = require('../models/user')

//CRUD Controllers
// get all users
exports.getUsers = (req, res, next) => {
    User.findAll()
        .then(users => {
            res.status(200).json({ users: users })

        }
        )
        .catch(err => console.log(err))
}

// get user by id
exports.getUser = (req, res, next) => {
    const userId = req.params.UserId;
    User.findByPk(userId)
        .then(user => {
            if (!user) {
                res.status(404).json({ message: 'User not found' })
            }
            res.status(200).json({ user: user })
        })
        .catch(err => console.log(err))
}

//create a new user

exports.createUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    User.create({ name: name, email: email })
        .then(user => {
            console.log('Created user');
            res.status(201).json({ message: 'User created successfully!', user: user })
        })
        .catch(err => console.log(err))
}

//update a user
exports.udpdateUser = (req, res, next) => {
    const userId = req.params.UserId;
    const updatename = req.body.name;
    const updateemail = req.body.email;
    User.findByPk(userId)
        .then(user => {
            if (!user) {
                res.status(404).json({ message: 'User not found' })
            }
            user.name = updatename;
            user.email = updateemail;
            return user.save();
        })
        .then(result => {
            res.status(200).json({ message: 'User updated !', user: result })
        })
        .catch(err => console.log(err));

}
//delete user
exports.deleteUser = (req, res, next) => {
    const userId = req.params.UserId;
    User.findByPk(userId)
        .then(user => {
            if (!user) {
                res.status(404).json({ message: 'User not found' })
            }
            return user.destroy({
                where: {
                    id: userId
                }
            });
        })
        .then(result => {
            res.status(200).json({ message: 'User deleted' })
        })
        .catch(err => console.log(err));
}
