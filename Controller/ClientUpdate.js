const clientSchema = require("../Model/ClientSchema");


const updateclient =async(req,res)=>{

    const {Name,Username,Email,Signedstatus,Role,Phonenumber}=req.body
    
    const id = req.params.id
    
    console.log(id);
    const clientUpdate = await clientSchema.findByIdAndUpdate(id,{
        Name,
        Username,
        Email,
        Signedstatus,
        Role,
        Phonenumber

    })

    res.json(clientUpdate)
}

module.exports = updateclient