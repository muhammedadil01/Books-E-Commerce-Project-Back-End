const clientSchema = require("../Model/ClientSchema")


const clientdata =async(req,res)=>{
    
    const data = await clientSchema.find({})

    res.json(data)
}

module.exports = clientdata