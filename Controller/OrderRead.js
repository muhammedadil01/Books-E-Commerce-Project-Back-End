const orderSchema = require("../Model/OrderSchema");


const orderRead =async(req,res)=>{
   
    const id = req.params.id

    console.log(id);

    const Readorder =await orderSchema.findById(id)
   

    res.json(Readorder)
}
 
module.exports = orderRead