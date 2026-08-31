const express= require("express");
const app= express();
const mongoose=require("mongoose");

const User =require("./model/userschema");
const Blog= require("./model/blogschema");


app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/duffer2')
.then(()=> console.log("connected"));



app.post("/user/register",async(req,res)=>{
    try{
        let{userName,email,password}=req.body;
    let newUser= new User({
        userName:userName,
        email:email,
        password:password,
    })
     await newUser.save()
    console.log("data saved successfully");

    }catch(error){
        console.log(error);
        res.send("internal server error");

    }
    
    
    
});
app.post("/user/blog",async(req,res)=>{
    try{
        let{title,content,created_at}=req.body;
        let newBlog= new Blog({
            title:title,
            content:content,
            created_at:created_at,
        })
        await newBlog.save()
        console.log("blog added succesfully");
    }catch(error){
        console.log(error);
        res.send(" server not working");
    }

});
app.listen(4040,()=>{
    console.log("server started");
});