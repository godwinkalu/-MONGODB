const userModel = require("../models/userModels")

exports.newUser = async(req, res)=>{

  try {
    const {fullName, age, isMarried,gender,email,password} = req.body;
     
    const userExists = await userModel.findOne({email:email.toLowerCase()});
    if (userExists) {
      return res.status(400).json({
        message: `user with Email: ${email} already exists`
      })
    }
    const user = await userModel.create({
      fullName,
      age,
      isMarried,
      gender,
      email,
      password

    });
 
    return res.status(201).json({
      message: "user added sucessfully",
      data: user
    })
    
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
            ``
exports.allUser = async (req,res)=>{
  try {
    const users = await userModel.find();
    return res.status(200).json({
      message: "Get all users available",
      data: users
    })
    
  } catch (error) {
    res.status(500).json({
      message: "error.message"
    })
  }
}

exports.oneUser = async (req,res)=>{

  try {
    const {id} = req.params
    const users = await userModel.findById(id)
    return res.status(201).json({
      message:"get one user sucessfully",
      data:users  
    })
  } catch (error) {
    res.status(500).json({
      message:error.message
    })
  }
}

exports.updateuser = async (req,res)=>{


  try {
    const id = req.params.id;
    
    const{fullName, email, age,gender,isMarried,password}= req.body

    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({
        message: "user not found"
      })
      
    }

    const data = {
      fullName,
      email:email?.toLowerCase(),
      age,
      isMarried,
      gender,
      password
    }
   
    const updateduser = await userModel.findByIdAndUpdate(id,data,{new:true})

    res.status(200).json({
      message : "user updated",
      data: updateduser
    })
  } catch (error) {
    res.status(500).json({
      message:"error.message"
    })
  }
}

exports.deleteuser = async (req,res)=>{

  try {
    const {id} = req.params;
    const deleteduser = await  userModel.findByIdAndDelete(id)
  return  res.status(200).json({
    message:  "user  deleted succesfully",
    data :  deleteduser
  })

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}