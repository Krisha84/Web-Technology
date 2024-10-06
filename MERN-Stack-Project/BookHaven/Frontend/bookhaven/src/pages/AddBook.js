import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import '../styles/AddBook.css';
import axios from 'axios';

function AddBook() {
    const [data, setData] = useState({ bookID: "", bookTitle: "", authorName: "", avatar: "" });
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.book) {
            setData(location.state.book);
        }
    }, [location.state]);

    const handleSubmit = async () => {
        if (!data.bookID || !data.bookTitle || !data.authorName || !data.avatar) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all the fields!',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Okay'
            });
            return;
        }

        const apiUrl = location.state && location.state.book
            ? `http://localhost:3004/books/${data.bookID}` 
            : "http://localhost:3004/books";  


        try {
            const response = await axios({
                method: location.state && location.state.book ? "put" : "post",
                url: apiUrl,
                data: data,
                headers: { "Content-Type": "application/json" }
            });

            Swal.fire({
                icon: 'success',
                title: location.state && location.state.book ? 'Updated!' : 'Submitted!',
                text: location.state && location.state.book ? 'Book details updated successfully!' : 'Book details submitted successfully!',
                showConfirmButton: true,
                confirmButtonColor: '#28a745',
                confirmButtonText: 'Great!'
            }).then(() => {
                navigate('/book');
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'There was an error submitting your data. Please try again.',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Okay'
            });
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const form = e.target.form;
            const index = Array.prototype.indexOf.call(form, e.target);
            form.elements[index + 1]?.focus();
            e.preventDefault();
        }
    };

    return (
        <>
            <div className='backtohome' style={{ margin: '20px' }}>
                <Link to="/" className="back-button">
                    Back to Home
                </Link>
            </div>
            <div className="container mt-3 d-flex justify-content-center">
                <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "600px", border: 'none', backgroundColor: '#1e1e2f' }}>
                    <div className="text-center fs-3 mb-4 text-light">{location.state && location.state.book ? 'Edit Book Details' : 'Enter Book Details'}</div>

                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor="text2" className="form-label text-light">Book ID</label>
                            <input
                                value={data.bookID}
                                onChange={(e) => setData({ ...data, bookID: e.target.value })}
                                onKeyDown={handleKeyDown}
                                type="text"
                                className="form-control shadow-sm"
                                placeholder="Enter Book ID"
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="text1" className="form-label text-light">Book Title</label>
                            <input
                                value={data.bookTitle}
                                onChange={(e) => setData({ ...data, bookTitle: e.target.value })}
                                onKeyDown={handleKeyDown}
                                type="text"
                                className="form-control shadow-sm"
                                placeholder="Enter Book Title"
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="text3" className="form-label text-light">Author Name</label>
                            <input
                                value={data.authorName}
                                onChange={(e) => setData({ ...data, authorName: e.target.value })}
                                onKeyDown={handleKeyDown}
                                type="text"
                                className="form-control shadow-sm"
                                placeholder="Enter Author Name"
                            />
                        </div>

                        <div className="form-group mb-4">
                            <label htmlFor="text4" className="form-label text-light">Image Path</label>
                            <input
                                value={data.avatar}
                                onChange={(e) => setData({ ...data, avatar: e.target.value })}
                                onKeyDown={handleKeyDown}
                                type="text"
                                className="form-control shadow-sm"
                                placeholder="Enter Image URL"
                            />
                        </div>

                        <div className="form-group mb-4">
                            <label htmlFor="text4" className="form-label text-light">Description</label>
                            <input
                                value={data.description}
                                onChange={(e) => setData({ ...data, description: e.target.value })}
                                onKeyDown={handleKeyDown}
                                type="text"
                                className="form-control shadow-sm"
                                placeholder="Enter description"
                            />
                        </div>

                        <div className="text-center">
                            <button
                                onClick={handleSubmit}
                                className="btn btn-success px-4 py-2 shadow"
                                type="button">
                                {location.state && location.state.book ? 'Update' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddBook;