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
app.use(cors())
//middleware: ده بيرن قبل كل الاكواد بتاعت ال handeler
// وعشان يروح للhandler اللي مبعوت في ال request لازم استخدم next() عشان يعملها run او ينفذها
// app.use('/ai', (req, res, next) => {
//     console.log(`req run on ${new Date()}`);
//     next()
// });

//middleware by express
// app.use(express.json()); //دي بستخدمها عشان اديب البيانات لو هي مبعوتة json
// app.use(express.urlencoded());//دي بستخدمعا لو البيانات مبعوتة في ال url
// app.use(morgan("combined"));

//user routes
app.use('/users', userroutes);
app.use('/courses', CourseRoutes);


//error handling( 'Global error' )

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
    console.log('app listen on port 5000')
});










// let promiseApp = new Promise((res, rej) => {
//     let complete = true;
//     if (complete) {
//         res();
//     } else {
//         rej();
//     }
// }).then(() => {
//     console.log("the promise is success");
// }).catch(() => {
//     console.log("the promise is failled ")
// });


