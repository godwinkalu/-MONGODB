const express = require("express")

const app = express()
app.use(express.json())
require("./config/database")
const userRouter = require("./routes/userRouter")

const dotenv = require("dotenv")

dotenv.config()
const port = process.env.port;
app.use(userRouter)


app.listen(port, ()=>{
  console.log(`server is running on port ${port}`);
  
}) 