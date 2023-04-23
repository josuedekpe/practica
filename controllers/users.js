const User=require('../models/user')

//CRUD Controllers
// get all users
exports.getUsers=(req,res,next)=>{
    User.findAll()
    .then(users=>{
        res.status(200..json({users:users}))

        }
    )
    .catch(err=>console.log(err))
}

// get user by id
exports.GetUser=(req,res,next)=>{
    const userId=req.
}
