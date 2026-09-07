const mongoose=require("mongoose");

const blogSchema= new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    author:{
        type:String,
    },
    content:{
        type:String,
        minLength:20,
    },
    date:{
        type:Date,
        default:Date.now
    },
    userId:{
            type:mongoose.Types.ObjectId,
            ref:"User",
        }
});
const Blog= new mongoose.model("Blog",blogSchema);
module.exports=Blog;