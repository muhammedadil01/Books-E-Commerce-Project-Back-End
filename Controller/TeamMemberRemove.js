const TeamMemberSchema = require("../Model/TeamMemberSchema")

const removeTeammember =async(req,res)=>{

    const _id = req.params.id

    const deleteTeamMember = await TeamMemberSchema.findByIdAndDelete({
       _id
    })

    res.json("data Deleted")

}

module.exports = removeTeammember