const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://dheerajpattinson:dheeraj123@cluster0.rhagmuw.mongodb.net/"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
}
module.exports = connectToMongo;