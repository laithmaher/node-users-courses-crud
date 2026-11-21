const express = require('express');
const router = express.Router();
const verifyToken=require('../utils/VerifyToken');
const { deleteCourse, createCourse, getSingleCourse, getAllCourses } = require('../Controllers/coursesAuthentication');
const VerifyToken = require('../utils/VerifyToken');



router.get('/',getAllCourses);


router.get('/:id',getSingleCourse);


router.post('/',verifyToken,createCourse);


router.delete('/:id',VerifyToken,deleteCourse);


module.exports = router;
