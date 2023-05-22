const TeamMemberSchema = require("../Model/TeamMemberSchema");

const updateTeamMember =async(req,res)=>{

    const {Name,Email,Dateofbirth,Gender,Description,Role,Phonenumber}=req.body
    
    const id = req.params.id
    
    console.log(id);
    const TeamMemberUpdate = await TeamMemberSchema.findByIdAndUpdate(id,{
      
        Name,
        Email,
        Dateofbirth,
        Gender,
        Description,
        Role,
        Phonenumber
  
    })
   
    res.json(TeamMemberUpdate)
}

module.exports = updateTeamMember