const expres=require('express');
const router=expres.Router();
const {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    getByCountry,
    insertManyUsers
}=require('../controllers/users');
const {verifyToken,verifyUser,verifyAdmin}=require('../utilis/verify')

// get all Users
router.get('/',verifyUser,getAllUsers);

// get User by id
router.get('/get/:id',verifyUser,getUserById);

// update User
router.put('/:id',verifyUser,updateUser);

// delete User
router.delete('/:id',verifyAdmin,deleteUser);

// get by country
router.get('/country/:country',verifyAdmin,getByCountry);

// insert many Users
router.post('/users',verifyAdmin,insertManyUsers); 

module.exports=router;
