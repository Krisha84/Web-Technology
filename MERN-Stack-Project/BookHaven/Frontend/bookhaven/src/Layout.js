import { Link, Outlet } from "react-router-dom";
import './styles/Layout.css';

function Layout() {
    return (
        <div className="layout-container">
            <nav className="navbar navbar-expand-lg bg-success bg-opacity-80 border-bottom border-body">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{ color: "white" }}>BookHaven</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" style={{ color: "white" }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/book" style={{ color: "white" }}>Books</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/addbook" style={{ color: "white" }}>AddBook</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about" style={{ color: "white" }}>About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;