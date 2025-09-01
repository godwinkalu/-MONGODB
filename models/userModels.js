//import mongoose
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
     fullName: {
      type: String,
      required:true
     },
     email:{
      type:String,
      required: ['Email is required ', true],
      unique:true
     },
     gender:{
      type:String,
      enum:['male', "female"],
      required:true
     },
     password:{
       type: String,
       required: true,
     },
     age:{
      type: Number
     },
     isMarried:{
      type:Boolean
     }
} , {timestamps:true});

const userModel = mongoose.model("users", userSchema)

module.exports = userModel