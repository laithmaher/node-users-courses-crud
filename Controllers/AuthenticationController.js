const bcrypt = require('bcrypt');
const AppError = require('../utils/AppError');
const User = require('../Models/users');
const jwt=require('jsonwebtoken')


const signUp = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password)
        return next(new AppError('email and password are required', 404));
    const userCreated = await User.create({ email, password});
    userCreated.password = undefined;
    res.send(userCreated);
    //next(err)
};



const login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) return next(new AppError("",400))
    const user = await User.findOne({ email }).select('+password');
    if (!user)  return next(new AppError('invalid credentials', 404));
    const isMatch = await user.checkPassword(password);
    if (!isMatch) return next(new AppError('invalid credentials'), 404);
    user.password = undefined;
    const token = jwt.sign({ id: user._id },process.env.JWT_SECRET,{expiresIn:"1h"});
    res.send({ token ,user });
}


const getSingleUser = async (req, res, next) => {
    const userbyid = await User.findById(req.params.id);
    if (!userbyid)
        return next(new AppError('User Not Found', 404));
    res.send(userbyid);
};


const getAllUsers = async (req, res, next) => {
    const users = await User.find();
    res.send(users);
};


const updateOneUser = async (req, res, next) => {
    const updateuser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updateuser);
};


const deleteOneUser = async (req, res, next) => {
    const deleteone = await User.findByIdAndDelete(req.params.id);
    res.send(deleteone);
};


module.exports = { signUp, getSingleUser, getAllUsers, updateOneUser, deleteOneUser,login };