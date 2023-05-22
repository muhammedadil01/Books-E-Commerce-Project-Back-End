const CustomerSchema = require("../Model/CustomerSchema");


const customerRead =async(req,res)=>{
   
    const id = req.params.id

    console.log(id);

    const Readcustomer =await CustomerSchema.findById(id)
    console.log(Readcustomer);

    res.json(Readcustomer)
}
 
module.exports = customerRead