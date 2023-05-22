const orderSchema = require("../Model/OrderSchema")


const orderdata =async(req,res)=>{
    
    const data = await orderSchema.find({})

    res.json(data)
}

module.exports = orderdata