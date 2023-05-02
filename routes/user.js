const Controllers=require('../controllers/users');
const router=require('express').Router();

//CRUD routes/users 
router.get('/',Controllers.getUsers)//Users routes/users

router.get('/:userId',Controllers.getUser);//users routes/users
router.post('/',Controllers.createUser);//users routes/users
router.put('/:userId',Controllers.udpdateUser);//user update
router.delete('/:userId',Controllers.deleteUser);//users.delete
module.exports=router;