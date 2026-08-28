const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
main().then((res)=>{
    console.log("connection succesful");
})
.catch((err)=>{
    console.log(err);
})

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

const User= mongoose.model("User",userSchema);

// single document INSERTION
// const user2= new User({
//     name:"Eve",
//     email:"xyz23@gmail.com",
//     age:45,
// });
// user2.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


// MULTIPLE DOCUMENT INSERTION
// User.insertMany([
//     {name:"Tony",email:"tony32@gmail.com",age:50},
//     {name:"Jacky",email:"jac89@gmail.com",age:40},
//     {name:"Smith",email:"smith890@gmail.com",age:47}
// ]).then((res)=>{
//     console.log(res);
// });

//FIND
// ALL DOCUMEMTS
// User.find({}).then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// });

// condition based
// User.findOne({age:{$gt:45}}).then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// });

// UDATAION
//UPDATE ONE
// User.updateOne({name:"Adam"},{age:49})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

//UPDATE MANY
// User.updateMany({age:{$gte:48}},{age:52})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

//FIND AND UPDATE
// FINDONEANDUPDATE
// User.findOneAndUpdate({name:"Adam"},{age:42},{new:true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

//FIND BY ID AND UPDATE
// User.findByIdAndUpdate({_id:"6a91046075115d6014ccbcd8"},{age:42},{new:true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

//DELETE
// User.deleteOne({name:"Adam"}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });
// User.deleteMany({age:{$gt:45}}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });
User.find({}).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});