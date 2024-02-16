const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://dheerajpattinson:dheeraj123@cluster0.rhagmuw.mongodb.net/"


mongoose.connect(mongoURI);
// mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('connected',function(){
    console.log("database is connected")
});

db.on('error',function(){
    console.log("eroor")
});

