
const mongoose = require("mongoose")

const customer = mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Address:{type:String},
    Address1:{type:String},
    City:{type:String},
    State:{type:String},
    Pincode:{type:Number},
    Country:{type:String}
})

const CustomerSchema = mongoose.model("Customer",customer)

module.exports = CustomerSchema