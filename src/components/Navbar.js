import './Navbar.css';
function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="name-title">Saad Vadnagara</div>
                <div className="navbar-links">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Projects</a></li>
                        <li><a href="/">Skills</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;