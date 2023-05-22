const orderSchema = require("../Model/OrderSchema")


const removeorder =async(req,res)=>{

    const _id = req.params.id

    const deleteOrder= await orderSchema.findByIdAndDelete({
       _id
    })

    res.json("data Deleted")

}

module.exports = removeorder