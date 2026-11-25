const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config()
const morgan = require('morgan');
const cors=require('cors')
const userroutes = require('./Routes/UserRoutes');
const CourseRoutes = require('./Routes/CoursesRoutes');
const bodyparser = require('body-parser');
require('./db')

app.use(express.json());      // to parse the request payload
app.use(express.urlencoded());
//require('./db');
app.use(morgan('combined'));  //to logging
app.use(cors());


app.get('/', (req, res) => {
  res.redirect('/register.html');
});

app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', userroutes);
app.use('/courses', CourseRoutes);


app.use((error, req, res, next) => {
    console.log('Error', error);
    const statusCode = error.statusCode || 500;
    res.status(statusCode).send({
        status: statusCode,
        message:error?.message ||'Internal Server Error..!',
        errors:error?.errors ||[]
    });
});





app.listen(process.env.PORT, () => {
    console.log(`app listen on port ${process.env.PORT}`)
});







