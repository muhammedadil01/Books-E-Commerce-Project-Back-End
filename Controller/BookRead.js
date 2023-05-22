const BookSchema = require("../Model/BooksSchema")


const bookRead =async(req,res)=>{
   
    const id = req.params.id

    console.log(id);

    const Readbook =await BookSchema.findById(id)
    console.log(Readbook);

    res.json(Readbook)
}
 
module.exports = bookRead 