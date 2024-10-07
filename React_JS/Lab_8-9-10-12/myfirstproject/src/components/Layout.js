import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <h1>Header Here</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
            </ul>
            <Outlet />
            <h1>Footer Here</h1>
        </>
    );
}

export default Layout;