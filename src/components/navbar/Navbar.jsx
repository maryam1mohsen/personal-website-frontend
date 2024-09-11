import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, logout }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {!isAuthenticated ? (
          <>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><button onClick={logout}>Log Out</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
