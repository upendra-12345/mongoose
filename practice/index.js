const express= require("express");
const app=express();
const mongoose=require("mongoose");

const User= require("./models/userschema");
const Blog= require("./models/blogschema");
mongoose.connect('mongodb://127.0.0.1:27017/duffer2')
.then(()=> console.log("connected"));

app.listen(4040,()=>{
    console.log("server started on port 40404");
});