import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import authService from './services/authService';

// Components
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import BlogList from './components/blog/BlogList';
import BlogDetail from './components/blog/BlogDetail';
import BlogCreate from './components/blog/BlogCreate';
import BlogEdit from './components/blog/BlogEdit';
import PortfolioList from './components/portfolio/PortfolioList';
import PortfolioDetail from './components/portfolio/PortfolioDetail';
import PortfolioCreate from './components/portfolio/PortfolioCreate';
import PortfolioEdit from './components/portfolio/PortfolioEdit';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const location = useLocation();

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  const isHomePage = location.pathname === '/';

  return (
    <Router>
      <div id="root" className={isHomePage ? 'home-page' : 'other-page'}>
        <Navbar user={user} handleSignout={handleSignout} />
        {isHomePage && (
          <div className="home-content">
            <h1>Welcome to My Page!</h1>
            <button onClick={() => window.location.href = '/blogs'}>View Blogs</button>
            <button onClick={() => window.location.href = '/portfolio'}>View Portfolio</button>
            <button onClick={() => window.location.href = '/sign-in'}>Sign In</button>
            <button onClick={() => window.location.href = '/sign-up'}>Sign Up</button>
          </div>
        )}
        <main className={location.pathname === '/sign-in' || location.pathname === '/sign-up' ? 'form-page-wrapper' : 'main-content'}>
          <Routes>
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/blogs/create" element={<BlogCreate />} />
            <Route path="/blogs/edit/:id" element={<BlogEdit />} />
            <Route path="/portfolio" element={<PortfolioList />} />
            <Route path="/portfolio/:id" element={<PortfolioDetail />} />
            <Route path="/portfolio/create" element={<PortfolioCreate />} />
            <Route path="/portfolio/edit/:id" element={<PortfolioEdit />} />
            <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
            <Route path="/sign-up" element={<SignUp setUser={setUser} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
