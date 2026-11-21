const AppError = require("../utils/AppError");
const Course = require('../Models/courses');






const getAllCourses = async (req, res, next) => {
    const getall = await Course.find().populate("createdBy");
    res.send(getall);
};


const getSingleCourse = async (req, res, next) => {
    const id = req.params.id;
    const course = await Course.findById(id).populate("createdBy");
    res.send(course);
};



const createCourse = async (req, res, next) => {
    const { courseName, price } = req.body;
    if (!courseName )
        return next(new AppError('CourseName and Price are required', 404));
    const CourseCreated = await Course.create({ courseName, price ,createdBy:req.user._id});
    res.send(CourseCreated);
};




const deleteCourse = async (req, res, next) => {
    const id = req.params.id;
    if (!id)
        return next(new AppErrorr('Course_Id is required', 404));
    const deletedCourse = await Course.findByIdAndDelete(id);
    res.send(deletedCourse);
};




module.exports={deleteCourse,createCourse,getSingleCourse,getAllCourses}