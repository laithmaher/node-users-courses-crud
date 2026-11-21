const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt=require('bcrypt')

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required:true
    },
    password: {
        type: String,
        required: true,
        select:false
    }
});


UserSchema.pre("save", async function () {
    const currentDocument = this;
    if (currentDocument.isModified('password')) {
        const hashedpassword = await bcrypt.hash(currentDocument.password, 10);
        currentDocument.password = hashedpassword;
    }
});


UserSchema.methods.checkPassword = async function (password) {
    const currentDocument = this;
    const isMatch = await bcrypt.compare(password,currentDocument.password);
    return isMatch;
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
 



/*
const signUp= async (req,res,next)=>{
    const {email,pass}=req.body;
    if(!email||!pass)
    return next(new apperror("error",307));
    const hashedpass=bcrypt.hash(pass,10)}
*/