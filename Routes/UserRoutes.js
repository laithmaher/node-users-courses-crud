const express = require('express');
const router = express.Router();
const { signUp,getSingleUser,getAllUsers,updateOneUser,deleteOneUser, login } = require('../Controllers/AuthenticationController');

const { loginValidation, signUpValidation } = require('../utils/ValidationSchema');

require('express-async-handler');


router.get('/',getAllUsers );  


router.get('/:id',getSingleUser);  


router.post('/',signUpValidation,signUp);


router.post('/login',loginValidation,login)


router.patch('/:id',updateOneUser);


router.delete('/:id',deleteOneUser);

 


module.exports = router;
