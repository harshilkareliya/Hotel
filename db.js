const mongoose = require('mongoose')
require('dotenv').config();
// const mongoUrl = 'mongodb://localhost:27017/OnlineLec'
const mongoUrl = 'mongodb+srv:///kareliyaharshil2111:Hk123456@test.mpuih2h.mongodb.net/'

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

db.on('error',(err)=>{
    console.log('Error to MongoDb server ' + err)
})

module.exports = db;