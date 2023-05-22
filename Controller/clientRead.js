const clientSchema = require("../Model/ClientSchema");


const clientRead =async(req,res)=>{
   
    const id = req.params.id

    console.log(id);

    const Readclient =await clientSchema.findById(id)
    console.log(Readclient);

    res.json(Readclient)
}
 
module.exports = clientRead