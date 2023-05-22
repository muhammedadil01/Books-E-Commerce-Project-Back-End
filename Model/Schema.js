const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    FirstName:{type:String},
    SecondName:{type:String},
    Email:{type:String},
    Password:{type:String}
})

const User = mongoose.model("DatabaseUser",Schema)

module.exports = User