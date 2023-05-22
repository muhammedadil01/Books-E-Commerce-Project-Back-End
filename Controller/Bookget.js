

const BookSchema = require('../Model/BooksSchema')


const recievedata =async(req,res)=>{
    
    const data = await BookSchema.find({})

    res.json(data)
}

module.exports = recievedata

