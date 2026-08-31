const express= require("express");
const app= express();
const mongoose=require("mongoose");

const User =require("./model/userschema");


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
app.listen(4040,()=>{
    console.log("server started");
});