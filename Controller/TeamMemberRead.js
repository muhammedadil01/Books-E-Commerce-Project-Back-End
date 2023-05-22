const TeamMemberSchema = require("../Model/TeamMemberSchema");


const TeamMemberRead =async(req,res)=>{
   
    const id = req.params.id

    console.log(id);

    const ReadTeamMember =await TeamMemberSchema.findById(id)
   

    res.json(ReadTeamMember)
}
 
module.exports = TeamMemberRead