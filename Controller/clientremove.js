const clientSchema = require("../Model/ClientSchema")


const removeclient =async(req,res)=>{

       
    
    const _id = req.params.id

    const deleteUser = await clientSchema.findByIdAndDelete({
       _id
    })

    res.json("data Deleted")

}

module.exports = removeclient