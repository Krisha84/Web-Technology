const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookID: {
        type: String,
        required: true
    },
    bookTitle: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
});

module.exports = mongoose.model('schema', bookSchema, 'books');