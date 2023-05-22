const orderSchema = require("../Model/OrderSchema");


const updateOrder =async(req,res)=>{

    const {Firstname,Lastname, Orderid,Productnumber,Date,Street,Additionalinformation,Pincode,Place, Country,Contactnumber}=req.body
    
    const id = req.params.id
    
    console.log(id);
    const OrderUpdate = await orderSchema.findByIdAndUpdate(id,{
      
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
   
    res.json(OrderUpdate)
}

module.exports = updateOrder