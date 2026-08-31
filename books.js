const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
main().then((res)=>{
    console.log("connection succesful");
})
.catch((err)=>{
    console.log(err);
});

const bookSchema= new mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String},
    price:{type:Number,min:1},
    discount:{type:Number,default:0},
    category:{
        type:String,
        enum:["fiction","non-fiction"],
    },

});
const Book= mongoose.model("Book",bookSchema);
let book2= new Book({
    title:"Marvel comics",
    author:"john dem",
    price:1000,
    category:"fiction",
});
book2.save().then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err);
});