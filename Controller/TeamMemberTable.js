const TeamMemberSchema = require("../Model/TeamMemberSchema")


const teammemberdata =async(req,res)=>{
    
    const teamdata = await TeamMemberSchema.find({})

    res.json(teamdata)
}

module.exports = teammemberdata