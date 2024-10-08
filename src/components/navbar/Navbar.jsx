import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = ({ user, handleSignout }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/logo.png" className="logo" alt="Logo" />
      </div>
      <nav className="navbar">
        <ul className="nav-center">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/blogs">Blog</Link></li>
          <li><Link to="/contactme">Contact</Link></li>
          {user ? (
            <li><Link onClick={handleSignout} to="/">Sign Out</Link></li>
          ) : (
            <>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
