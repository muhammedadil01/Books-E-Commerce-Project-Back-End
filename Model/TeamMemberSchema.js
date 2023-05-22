
const mongoose = require("mongoose")

const Teammember = mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Dateofbirth:{type:Date},
    Gender:{type:String},
    Description:{type:String},
    Role:{type:String},
    Phonenumber:{type:Number}
})

const TeamMemberSchema = mongoose.model("Team Member",Teammember)

module.exports = TeamMemberSchema