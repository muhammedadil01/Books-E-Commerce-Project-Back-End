const CustomerSchema = require("../Model/CustomerSchema")


const customerdata =async(req,res)=>{
    
    const data = await CustomerSchema.find({})

    res.json(data)
}

module.exports = customerdata