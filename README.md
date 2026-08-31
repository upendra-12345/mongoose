Mongoose:- A library that creates a connection between mongoDb and Nodejs javascript runtime environment. it is an ODM(object data modeling)library.
Installiaon :- npm i mongoose

Schema:- it defines the shape of the documents within that collection
example:-  
        const userSchema= new mongoose.Schema({
            name:String,
            email:Stiring,
            age:Number
 
  });
**Models:- it is a class with which we construct documents.
model name should be same as collection name.

# INSERT IN MONGOOSE
>> INSERT ONE
>> INSERT MANY := Model.insertMany([{ },{ },{,}])
**# FIND**
>>Model.find():= return a queries object where we can apply .then() and .catch()
>> it return all the documents of the collection in array of objects
#Model.findOne({filter}) := return single document based on filter condition
#Model.findById("id") := return document on id basis

**#UPDATE**
>>Model.updateOne({filter},{updation});
>>Model.updateMany({filter},{updation});

**#FIND AND UPDATE**
>>Model.findOneAndUpdate()
>>model.findByIdAndUpdate()

**#DELETE**
>>Model.deleteOne()
>>Model.deleteMany()

****#FIND AND DELETE**
>>Model.findOneAndDelete()
>>model.findByIdAndDelete()
