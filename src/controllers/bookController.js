// const { count } = require("console")
const AuthorModel = require("../models/authorModel")
const BookModel= require("../models/bookModel")


let createAuthor = async function(req, res) {
    let data = req.body
    let savedData = await authorModel.create(data)
    res.send({msg: savedData})
}

let createBook = async function(req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({msg: savedData})
}

let getBookByChetanBhagat = async function(req, res) {
    let data = await authorModel.find({authorName: "chetan bhagat"}).select("authorId")
    let bookData = await BookModel.find({authorId: data[0].authorId})
    res.send({msg: bookData})
}

let authorOfBook = async function(req, res) {
    let data = await AuthorModel.findoneAndUpdate({name: "two states"},{$set: {price: 100}}, {new:true})
    let authorData = await AuthorModel.find({authorId: data.authorId}).select("authorName")
    let price = data.price
    res.send({msg: authorData, price})
}



module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.getBookByChetanBhagat= getBookByChetanBhagat
module.exports.authorOfBook= authorOfBook
