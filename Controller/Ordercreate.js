const orderSchema = require("../Model/OrderSchema")


const OrderPost =async(req,res)=>{

    const {Firstname,Lastname, Orderid,Productnumber,Date,Street,Additionalinformation,Pincode,Place, Country,Contactnumber}=req.body

    const orderCreate = await orderSchema.create({
    Firstname,
    Lastname,
    Orderid,
    Productnumber,
    Date,
    Street,
    Additionalinformation,
    Pincode,
    Place,
    Country,
    Contactnumber

    })

    res.json(orderCreate)
}

module.exports = OrderPost