const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {

    name: { 
        type: String,
    },
    authorId: {
        type: String,
        required: true
    },
    price: Number,
    rating: Number

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) 
