const CustomerSchema = require("../Model/CustomerSchema");


const updatecustomer =async(req,res)=>{

    const {Name,Email,Address,Address1,City,State,Pincode,Country}=req.body
    
    const id = req.params.id
    
    console.log(id);
    const customerUpdate = await CustomerSchema.findByIdAndUpdate(id,{
        Name,
        Email,
        Address,
        Address1,
        City,
        State,
        Pincode,
        Country

    })
   console.log(customerUpdate);
    res.json(customerUpdate)
}

module.exports = updatecustomer