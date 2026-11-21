const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("conected to db"))
    .catch((err)=>console.log(err));