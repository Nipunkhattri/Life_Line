const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/life_line")
.then(()=>{
    console.log("Connected to the Database");
})
.catch(err => {
    console.log(err);
})