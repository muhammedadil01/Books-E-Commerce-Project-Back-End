const BookSchema = require("../Model/BooksSchema")

const updatebook =async(req,res)=>{

    const {Name,Author,Year,Publication,Availablity}=req.body
    
    const id = req.params.id
    
    console.log(id);
    const bookUpdate = await BookSchema.findByIdAndUpdate(id,{
        Name,
        Author,
        Year,
        Publication,
        Availablity

    })

    res.json(bookUpdate)
}

module.exports = updatebook