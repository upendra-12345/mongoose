const express= require("express");
const app= express();

// Application -level middleware
// app.use(m3);
// app.use(m1);

// app.get("/",(req,res,next)=>{
//     res.send("hii i am root server");
   
// });
// // app.use(m2);
// app.get("/about",m2,(req,res,next)=>{
//     res.send("hello world");
    
// });


// function m3(req,res,next){
//     console.log(req.userid);
//     console.log("middleware 3 run");
//     next();
    
// }
// function m1(req,res,next){
//     console.log("middleware 1 run");
//     req.userid=1;
//     next();
// }
// function m2(req,res,next){
//     console.log("m2 ke ander", req.userid);
//     if(req.userid){
//        return  next();
//     }
//     console.log("middleware 2 run");
//     res.send("not authorised");
//     next();

// }


// UTILITY MIDDLEWARE
app.use((req,res,next)=>{
    req.responseTime= new Date(Date.now()).toString();

    console.log(req.method,req.path,req.responseTime,req.hostname);
    next();
});
app.get("/",(req,res,next)=>{
    res.send("hii i am root server");
   
});

// API TOKEN AS QUERY STRING
app.use("/api",(req,res,next)=>{
    let {token}= req.query;
    if(token == "giveaccess"){
        next();
    }
   
    res.send("ACCESS DENIED !");
});

app.get("/api",(req,res)=>{
    res.send("data ");
});
app.listen(8080,()=>{
    console.log("server started");
});