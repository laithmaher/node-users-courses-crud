const express = require('express');
const router = express.Router();
const verifyToken=require('../utils/VerifyToken');
const { deleteCourse, createCourse, getSingleCourse, getAllCourses } = require('../Controllers/coursesAuthentication');
const VerifyToken = require('../utils/VerifyToken');

// const courses = [
// {
//     id: 1,
//     courseName: "node.js",
//     price:200
// },
// {
//      id: 2,
//     courseName: "mongoDB",
//     price:150
//     }]


router.get('/',getAllCourses);


router.get('/:id',getSingleCourse);


router.post('/',verifyToken,createCourse);


router.delete('/:id',VerifyToken,deleteCourse);


module.exports = router;