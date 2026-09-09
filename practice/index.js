const express= require("express");
const app=express();
const mongoose=require("mongoose");

const User= require("./models/userschema");
const Blog= require("./models/blogschema");
app.use(express.json());
// DELETE USER
app.delete("/user/deleteuser/:id",async(req,res)=>{
    try{
        let {id}= req.params;
        let user= await User.findByIdAndDelete(id);
        console.log(user);
        await Blog.deleteMany({userId:id});
        res.send("user removed !");

    }catch(error){
        console.log(error);
        res.send("internal server error");
    }
});

// delete blog
app.delete("/blog/deleteblog/:id",async(req,res)=>{
    try{
        let {id}= req.params;
        let blog= await Blog.findByIdAndDelete(id);
        console.log(blog);
        res.send("blog deleted succesfully");

    }catch(error){
        console.log(error);
        res.send("internal server error");
    }

});
// ADD USER
app.post("/blog/register",async(req,res)=>{
    try{
        let{ name, email,password}= req.body;
        let newuser= await User.create({
            name:name,
            email:email,
            password:password
        })
        res.json(newuser);

    }catch(error){
        console.log(error);
        res.send("internal server error");
    }

});
//ADD BLOG
app.post("/blog/addblog",async(req,res)=>{
    try{
        let {title, author, content,userId}= req.body;
        let newBlog= await Blog.create({
            title:title,
            author:author,
            content:content,
            userId:userId
        })
        await User.findByIdAndUpdate(userId,{$push:{blogs:newBlog._id}});
        res.json(newBlog);
    }catch(error){
        console.log(error);
        res.send("internal server error");
    }
});
//FETCH ALL BLOGS
app.get("/blogs",async(req,res)=>{
  let allblog = await Blog.find().populate("userId");
  res.json(allblog);
});
// FETCH ALLUSERS
app.get("/allusers", async(req,res)=>{
    try{
        let user= await User.find();
        res.json(user);
    }catch(error){
        console.log(error);
    }
});


mongoose.connect('mongodb://127.0.0.1:27017/duffer2')
.then(()=> console.log("connected"));

app.listen(4040,()=>{
    console.log("server started on port 4040");
});
