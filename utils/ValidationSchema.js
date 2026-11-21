const joi = require('joi');
const AppError=require("../utils/AppError")

const signschema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(3).max(8)
});


const logschema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(3).max(8)
});


const signUpValidation = (req, res, next) => {
    const { error } = signschema.validate(req.body);
    if (error)
        return next(new AppError(error.message, 400));
    next()
};

const loginValidation = (req, res, next) => {
    const { error } = logschema.validate(req.body);
    if (error)
        return next(new AppError(error.message, 400));
    next();
};

module.exports = { signUpValidation, loginValidation };
