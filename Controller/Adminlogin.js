const User = require("../Model/Schema")
const bcrypt = require("bcrypt")

const adminlogin=async(req,res)=>{

    const {Email,Password}=req.body
    console.log(Email,Password);

    const data = await User.findOne({Email})

    if(!data){
     return  res.json("Data is null")
    }
  console.log(data);

  if(data.Email == Email && (await bcrypt.compare(Password,data.Password)))
  {
    res.json("Login Successfull")
  }else{
    res.json("Login Failed")
  }
}

module.exports = adminlogin