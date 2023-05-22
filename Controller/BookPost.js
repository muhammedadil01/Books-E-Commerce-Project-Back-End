const BookSchema = require("../Model/BooksSchema")

const Bookpost = async(req,res)=>{

    const {Name,Author,Year,Publication,Availablity}=req.body

    const ReciveBook = await BookSchema.create({
        Name,
        Author,
        Year,
        Publication,
        Availablity
    })

    res.json({
        Name:ReciveBook.Name,
        Author:ReciveBook.Author,
        Year:ReciveBook.Year,
        Publication:ReciveBook.Publication,
        Availablity:ReciveBook.Availablity
    })
}

module.exports = Bookpost