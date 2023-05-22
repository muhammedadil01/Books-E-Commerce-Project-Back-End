
const mongoose = require("mongoose")

const clientmongoose = mongoose.Schema({

    Name:{type:String},
    Username:{type:String},
    Email:{type:String},
    Signedstatus:{type:String},
    Role:{type:String},
    Phonenumber:{type:Number}
})

const clientSchema = mongoose.model("client",clientmongoose)

module.exports = clientSchema