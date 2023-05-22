const TeamMemberSchema = require("../Model/TeamMemberSchema")


const TeamMemberPost =async(req,res)=>{

    const {Name,Email,Dateofbirth,Gender,Description,Role,Phonenumber}=req.body

    const TeamMemberCreate = await TeamMemberSchema.create({
        Name,
        Email,
        Dateofbirth,
        Gender,
        Description,
        Role,
        Phonenumber

    })

    res.json({
        Name:TeamMemberCreate.Name,
        Email:TeamMemberCreate.Email,
        Dateofbirth:TeamMemberCreate.Dateofbirth,
        Gender:TeamMemberCreate.Gender,
        Description:TeamMemberCreate.Description,
        Role:TeamMemberCreate.Role,
        Phonenumber:TeamMemberCreate.Phonenumber
    })
}

module.exports = TeamMemberPost