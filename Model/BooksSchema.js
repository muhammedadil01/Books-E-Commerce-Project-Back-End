const mongoose = require("mongoose")

const BSchema = mongoose.Schema({
    Name:{type:String},
    Author:{type:String},
    Year:{type:Number},
    Publication:{type:String},
    Availablity:{type:String}
})

const BookSchema = mongoose.model("BookSchema",BSchema)

module.exports = BookSchema