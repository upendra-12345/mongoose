const express= require("express");
const app= express();


app.use(m3);
app.use(m1);

app.get("/",(req,res,next)=>{
    res.send("hii i am root server");
   
});
app.use(m2);
app.get("/about",(req,res,next)=>{
    res.send("hello world");
    
});


function m3(req,res,next){
     console.log("middleware 3 run");
     next();
    
}
function m1(req,res,next){
    console.log("middleware 1 run");
    next();
}
function m2(req,res,next){
    console.log("middleware 2 run");
    next();

}

app.listen(8080,()=>{
    console.log("server started");
});