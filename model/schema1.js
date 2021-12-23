const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    User_name:{
        type:String,
        required:[true,'name is needed'],
        trim:true
    },
    password:{
        type:String,
        required:[true,'password is needed'],
        trim:true
    },
    email:{
        type:String,
        required:[true,'email is needed'],
        trim:true
    }
})

module.exports = mongoose.model('users',userSchema); 