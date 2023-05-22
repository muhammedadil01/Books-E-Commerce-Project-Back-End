
const mongoose = require("mongoose")

const Order = mongoose.Schema({
    Firstname:{type:String},
    Lastname:{type:String},
    Orderid:{type:String},
    Productnumber:{type:Number},
    Date:{type:Date},
    Street:{type:String},
    Additionalinformation:{type:String},
    Pincode:{type:Number},
    Place:{type:String},
    Country:{type:String},
    Contactnumber:{type:Number}
})

const orderSchema= mongoose.model("order",Order)

module.exports = orderSchema