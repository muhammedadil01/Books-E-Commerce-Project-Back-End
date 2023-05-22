const User = require("../Model/Schema")
const bcrypt =require("bcrypt")
const JWT = require("jsonwebtoken")

const userregistration =async(req,res)=>{

    const {FirstName,SecondName,Email,Password}=req.body

       const salt = bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(Password,parseInt(salt))

    const existdata = await User.findOne({Password})
    if(existdata){
        res.json("User Already Exist")
    }

    if(Password.length<6){
        res.json("Enter Atleast 6 Characters")
    }

  if(!FirstName || !SecondName || !Email || !Password){
    
    res.json("Inputs Are Missing")

  }else{
    const userCreate = await User.create({
            FirstName,
            SecondName,
            Email,
            Password:hashedPassword  
    })
    res.json({
        FirstName:userCreate.FirstName,
        SecondName:userCreate.SecondName,
        Email:userCreate.Email,
        Password:userCreate.Password,
        Token:tokengenerate(userCreate._id)
        
    })
 }
}

const tokengenerate =(id)=>{
   return JWT.sign({id},`${process.env.JWT_SECRET}`,{
        expiresIn:"1d"
    })
}

module.exports = userregistration
