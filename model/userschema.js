const mongoose= require("mongoose");
const userSchema= new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        default:Date.now
    },
    

});
const User = mongoose.model("User",userSchema);
module.exports=User;