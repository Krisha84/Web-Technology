import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Layout from './Layout';
import Book from './pages/Book';
import BookDetail from './pages/BookDetail';
import AddBook from './pages/AddBook';
import About from './pages/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);