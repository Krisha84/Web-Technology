const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const Book = require('./models/schema');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected !!'))
    .catch(err => console.error(err));


// 1. GET all books
app.get('/books', async (req, res) => {
    const books = await Book.find();
    res.send(books);
});

// 2. GET a book by ID
app.get('/books/:id', async (req, res) => {
    const book = await Book.findOne({ bookID: req.params.id });
    res.send(book);
});

// 3 POST to add a new book
app.post('/books', async (req, res) => {
    const newBook = new Book({ ...req.body });
    const savedBook = await newBook.save();
    res.send(savedBook);
});

// 4. DELETE a book by ID
app.delete('/books/:bookID', async (req, res) => {
        const result = await Book.deleteOne({ bookID: req.params.bookID });
        res.send({ message: 'Book deleted successfully' });
});


// 5. UPDATE a book by ID
app.put('/books/:bookID', async (req, res) => {
        const updatedBook = await Book.findOneAndUpdate(
            { bookID: req.params.bookID },
            req.body,
            { new: true }
        );
        res.send(updatedBook);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});