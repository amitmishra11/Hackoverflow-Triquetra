const mongoose=require('mongoose');

var schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:String,
    status:String
})

const Userdb = mongoose.model('userdb',schema);

// now line 20 to export the module
module.exports=Userdb;