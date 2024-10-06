import axios from 'axios';

const API_URL = 'http://localhost:3008';

export const fetchBooks = async () => {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
};

export const fetchBookById = async (id) => {
    const response = await axios.get(`${API_URL}/books/${id}`);
    return response.data;
};

export const createBook = async (bookData) => {
    const response = await axios.post(`${API_URL}/books`, bookData);
    return response.data;
};

export const deleteBook = async (id) => {
    await axios.delete(`${API_URL}/books/${id}`);
};
