const mongodb = require('mongoose');

const userstable = new mongoose.schema({
    name : {type: string, required: true},
    password : {type: string, required: true},
    email: {type: string, required: true},
    role:{type:string,required:true,default:"user"}
} ,{timestamps : true})


module.exports = mongoose.models('users', userstable);

