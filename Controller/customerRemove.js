const CustomerSchema = require("../Model/CustomerSchema")


const removecustomer =async(req,res)=>{

       
    
    const _id = req.params.id

    const deletecustomer = await CustomerSchema.findByIdAndDelete({
       _id
    })

    res.json("data Deleted")

}

module.exports = removecustomer