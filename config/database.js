// import our mongoose

const mongoose = require("mongoose");
require("dotenv").config()

const DB = process.env.MONGODB_URI


// connect to db

mongoose.connect(DB)
.then(()=>{
  console.log("Database connected successfuly")
})
.catch((error)=>{
  console.log("Error connecting to Database:", error.message);
  
})
