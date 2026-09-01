const express= require("express");
const app= express();
const mongoose=require("mongoose");

const User =require("./model/userschema");
const Blog= require("./model/blogschema");


app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/duffer2')
.then(()=> console.log("connected"));

// fetch
app.get("/allUsers",async(req,res)=>{
    try{
        let allUsers= await User.find();
        res.json(allUsers);
    }catch(error){
        console.log(error);
        res.send("ineternal server error");

    }
    

});
app.get("/allblogs",async(req,res)=>{
    try{
        let allblogs= await Blog.find();
        res.json(allblogs);
    }catch(error){
        console.log(error);
        res.send("ineternal server error");

    }
    

});
// fetch single blog

app.get("/blog/oneblog/:id",async(req,res)=>{
    try{
        let {id}=req.params;
        let blog= await Blog.findById(id);
        res.json(blog);
    }catch(error){
        console.log(error);
        res.send("internal server error")
    }
});
//delete single blog
app.delete("/blog/deleteblog/:id",async(req,res)=>{
    try{
        let {id}=req.params;
        let blog= await Blog.findByIdAndDelete(id);
        res.send("blog deleted succesfully");
    }catch(error){
        console.log(error);
        res.send("internal server error")
    }
});
// update single blog
app.put("/blog/updateblog/:id",async(req,res)=>{
    try{
        let {id}=req.params;
        let{title , content,created_at}=req.body;
        await Blog.findByIdAndUpdate(id,{title:title,content:content,created_at:created_at});
        let newBlog=await Blog.findById(id);
        res.json(newBlog);
    }catch(error){
        console.log(error);
        res.send("internal server error")
    }
});
//delete single user
app.delete("/user/deleteuser/:id",async(req,res)=>{
    try{
        let {id}=req.params;
        let blog= await User.findByIdAndDelete(id);
        res.send("blog deleted succesfully");
    }catch(error){
        console.log(error);
        res.send("internal server error")
    }
});

//add 
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