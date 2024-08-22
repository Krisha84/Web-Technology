const mongoose = require('mongoose');

const schema = mongoose.Schema({
    FacultyID:Number,
    FacultyName:String,
    FacultyAge:Number,
    FacultyEmail:String   
});

module.exports = mongoose.model("MongooDB_Faculty",schema);