const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const BookModel = require("../models/bookModel")
const AuthorModel = require("../models/authorModel")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser)

router.get("/getUsersData", UserController.getUsersData)

router.post("/createAuthor", BookController.createAuthor)

router.post("/createBook", BookController.createBook)

router.get("/getBookByChetanBhagat", BookController.getBookByChetanBhagat)

// router.post("/updateBooks", BookController.updateBooks)
router.get("/authorOfBook", BookController.authorOfBook)


module.exports = router;