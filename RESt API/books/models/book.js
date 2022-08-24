const monggoose = require('mongoose');

let Book = mongoose.model('book',{
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    numberPages: {
        type: Number,
        required: false,
    },
    publisher: {
        type: String,
        required: false,
    }
})

module.exports = Book;
















