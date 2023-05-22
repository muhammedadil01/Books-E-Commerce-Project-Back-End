const CustomerSchema = require("../Model/CustomerSchema")


const customerPost =async(req,res)=>{

    const {Name,Email,Address,Address1,City,State,Pincode,Country}=req.body

    const customerCreate = await CustomerSchema.create({
        Name,
        Email,
        Address,
        Address1,
        City,
        State,
        Pincode,
        Country
    })

    res.json({
        Name:customerCreate.Name,
        Email:customerCreate.Email,
        Address:customerCreate.Address,
        Address1:customerCreate.Address1,
        City:customerCreate.City,
        State:customerCreate.State,
        Pincode:customerCreate.Pincode,
        Country:customerCreate.Country
    })
}

module.exports = customerPost