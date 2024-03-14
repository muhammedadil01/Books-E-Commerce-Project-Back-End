const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    password:{type:String}
})

const User = mongoose.model("DatabaseUser",Schema)

module.exports = User

