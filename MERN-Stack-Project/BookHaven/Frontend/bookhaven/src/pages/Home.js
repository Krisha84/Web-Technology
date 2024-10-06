import { Link } from 'react-router-dom';
import '../styles/Home.css';
import image from '../img/books1.jpeg';
import img from '../img/books.jpeg';

function Home() {
    return (
        <>
            <div className="home-body">
                <div className="home-img">
                    <img src={img} alt="" className="home-image" />
                </div>
                <div className="home-content">
                    <h1 className="home-heading"><span>BookHaven</span></h1>
                    <h2 style={{ color: '#0e4475' }}>Buy and sell your <br />books <span>at the best prices</span></h2>
                    <p style={{ color: '#0e4475' }}>Discover, buy, and sell books you love. Keep track of your favorites, and join a global community of book lovers on BookHaven.</p>
                    <Link to="/book" className="explore-button">
                        Explore Now
                    </Link>
                </div>
                <div className="home-boxmode">
                    <img src={image} alt="" className="home-image" />
                </div>
            </div>
        </>
    );
}

export default Home;