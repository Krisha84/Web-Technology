import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from '../img/books.jpeg';
import '../styles/Book.css';
import axios from 'axios';

function Book() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get('http://localhost:3004/books');
            setData(response.data);
        };

        fetch();
    }, []);

    var formattedBook = data.map((book) => {
        return (
            <div className='book-card' key={book.id}>
                <div className="card shadow-sm">
                    <img src={image} alt="Book cover" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{book.bookTitle}</h5>
                        <p className="card-author">{book.authorName}</p>
                        <Link className="btn custom-btn" to={`/book/${book.bookID}`}>Read More</Link>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="book-page">
            <Link to="/" className="back-button">Back to Home</Link>
            <div className="book-grid">
                {formattedBook}
            </div>
        </div>
    );
}

export default Book;