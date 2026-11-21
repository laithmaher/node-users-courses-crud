const { required, number, ref } = require('joi');
const mongoose = require('mongoose');
const User = require('./users');
const { Schema } = mongoose;

const CourseSchema = new Schema({
    courseName:
    {
        type: String,
        unique: true,
        required: true
    },
    price:
    {
        type: Number,
        default:999
    },
    createdBy:
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required:true
    }

});

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;