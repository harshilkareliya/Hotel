const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
    name:{
        type : String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    persons:{
        type:Number,
        default:0,
        required:true
    },
    date:{
        type:Date,
        default: new Date()
    },
    orders:{
        type:[String],
        required:true
    },
    billAmount:{
        type:Number,
        required:true
    }
})

const Customer = mongoose.model('HotelCustomer',customerSchema)
module.exports = Customer