const clientSchema = require("../Model/ClientSchema")


const clientPost =async(req,res)=>{

    const {Name,Username,Email,Signedstatus,Role,Phonenumber}=req.body

    const createClient = await clientSchema.create({
        Name,
        Username,
        Email,
        Signedstatus,
        Role,
        Phonenumber
    })

    res.json(createClient)
    console.log(createClient);
}


module.exports= clientPost