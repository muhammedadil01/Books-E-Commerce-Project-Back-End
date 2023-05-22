const express = require("express")
const User = require("../Model/Schema")

const Create =async(req,res)=>{

    const {FirstName,SecondName,Email,Password}=req.body

    const usercreate = await User.create({
        FirstName,
        SecondName,
        Email,
        Password
    })

    res.json({
        FirstName:usercreate.FirstName,
        SecondName:usercreate.SecondName,
        Email:usercreate.Email,
        Password:usercreate.Password
    })
}

module.exports = Create