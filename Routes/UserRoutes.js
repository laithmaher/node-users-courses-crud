const express = require('express');
const router = express.Router();
const { signUp,getSingleUser,getAllUsers,updateOneUser,deleteOneUser, login } = require('../Controllers/AuthenticationController');

const { loginValidation, signUpValidation } = require('../utils/ValidationSchema');

//const { Error } = require('mongoose');
require('express-async-handler');



router.get('/',getAllUsers );  


router.get('/:id',getSingleUser);  


router.post('/',signUpValidation,signUp);


router.post('/login',loginValidation,login)


router.patch('/:id',updateOneUser);


router.delete('/:id',deleteOneUser);


// router.get('/ai', (req, res) => {

//      res.sendFile(path.join(__dirname ,'ai-page.html'));
//     //res.sendFile(C:\Users\11\OneDrive\Desktop\simple router.node);
// });



// router.get('/shop', (req, res) => {

//     res.sendFile(path.join(__dirname, 'ecommerce-store (1).html'));
//     //res.sendFile(C:\Users\11\OneDrive\Desktop\simple router.node);
// });
 


module.exports = router;