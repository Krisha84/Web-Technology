import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import '../styles/BookDetail.css';
import axios from 'axios';

function BookDetail() {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const apiUrl = `http://localhost:3004/books/${id}`;

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(apiUrl);
                setData(response.data);
            } 
            catch (error) {
                console.error("Error fetching book data:", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to load book details!',
                });
            }
        };
        fetchBook();
    }, [id]);

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(apiUrl);
                    Swal.fire(
                        'Deleted!',
                        'The book has been deleted.',
                        'success'
                    ).then(() => {
                        navigate('/book');
                    });
                } 
                catch (error) {
                    console.error("Error deleting book:", error);
                    Swal.fire(
                        'Error!',
                        'There was a problem deleting the book.',
                        'error'
                    );
                }
            }
        });
    };

    const handleEdit = () => {
        navigate('/addbook', {
            state: {
                book: data
            }
        });
    };

    return (
        <div className="detail-book-page">
            <div className="container mt-5">
                <div className="card shadow-lg p-4 book-card">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <Link to="/book" className="btn btn-info custom-btn">Back to List</Link>
                        <button className="btn btn-warning custom-btn m-3" onClick={handleEdit}>
                            Edit
                        </button>
                        <button className="btn btn-danger custom-btn" onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={data.avatar} alt="Book cover" className="img-fluid rounded shadow-sm book-image" />
                        </div>
                        <div className="col-md-8">
                            <h6 className="text-muted mb-1">BookID : {data.bookID}</h6>
                            <h1 className="text mb-3" style={{color:'#0e4475'}}>{data.bookTitle}</h1>
                            <h4 className="text-muted mb-3">Author: {data.authorName}</h4>
                            <p className="text-justify">{data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetail;