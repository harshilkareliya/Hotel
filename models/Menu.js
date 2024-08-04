const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    taste:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    sales:{
        type:Number,
        default:0
    },
    ingrediant:{
        type:[String],
        default:[]
    }
})

const Menu = mongoose.model('Menu',menuSchema)
module.exports = Menu