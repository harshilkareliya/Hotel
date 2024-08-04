const mongoose = require('mongoose')
require('dotenv').config();
// const mongoUrl = 'mongodb://localhost:27017/OnlineLec'
const mongoUrl = process.env.DB_Connection

mongoose.connect(mongoUrl, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to MongoDb server')
})

db.on('disconnected',()=>{
    console.log('Disonnected to MongoDb server')
})

db.on('erroe',(err)=>{
    console.log('Error to MongoDb server ' + err)
})

module.exports = db;