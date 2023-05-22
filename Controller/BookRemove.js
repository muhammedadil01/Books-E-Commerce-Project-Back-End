const BookSchema = require("../Model/BooksSchema")

const removebook =async(req,res)=>{

       
    
        const _id = req.params.id
    
        const deleteUser = await BookSchema.findByIdAndDelete({
           _id
        })
    
        res.json("data Deleted")
    
}

module.exports = removebook