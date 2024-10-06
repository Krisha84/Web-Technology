import React from 'react';
import '../styles/About.css';

function About() {
    return (
        <>
            <div className="bubble bubble-1"></div>
            <div className="bubble bubble-2"></div>
            <div className="bubble bubble-3"></div>
            <div className="bubble bubble-4"></div>
            <div className="about-container">
                <h1>About BookHaven</h1>
                <p>
                    Welcome to <strong>BookHaven</strong>, your one-stop destination for all things books! 
                    Whether you're looking to buy, sell, or discover new reads, we have something for everyone.
                    Our platform is designed to make book trading and sharing simple, enjoyable, and accessible for all.
                </p>
                <p>
                    At <strong>BookHaven</strong>, we believe in the power of stories. Our mission is to connect readers and
                    books in a meaningful way, creating a space where books can find new homes and readers can find their next
                    favorite adventure.
                </p>
                <p>
                    Dive into the world of books with us today, and be part of a community that loves and lives for stories.
                </p>
                <p className='about'>
                    <strong>~ Krisha_Busa</strong>
                </p>
            </div>
        </>
    );
}

export default About;