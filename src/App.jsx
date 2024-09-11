import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';

// Components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import BlogList from './components/blog/BlogList';
import BlogDetail from './components/blog/BlogDetail';
import BlogCreate from './components/blog/BlogCreate';
import BlogEdit from './components/blog/BlogEdit';
import BlogDelete from './components/blog/BlogDelete';
import PortfolioList from './components/portfolio/PortfolioList';
import PortfolioDetail from './components/portfolio/PortfolioDetail';
import PortfolioCreate from './components/portfolio/PortfolioCreate';
import PortfolioEdit from './components/portfolio/PortfolioEdit';
import PortfolioDelete from './components/portfolio/PortfolioDelete';
import SignIn from './components/auth/SignInForm';
import SignUp from './components/auth/SignUpForm';
import ContactMe from './components/contact/ContactMe';
import CommentList from './components/comments/CommentList';
import CommentCreate from './components/comments/CommentCreate';
import CommentEdit from './components/comments/CommentEdit';
import CommentDelete from './components/comments/CommentDelete';

const App = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome to My Page!');

  const randomWelcomeMessages = [
    'Discover amazing blogs and portfolios!',
    'Your journey starts here!',
    'Explore and enjoy our content!',
    'Welcome, and feel free to browse around!'
  ];

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * randomWelcomeMessages.length);
    setWelcomeMessage(randomWelcomeMessages[randomIndex]);
  };

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div id="root" className={isHomePage ? 'home-page' : 'other-page'}>
      <Navbar />
      <div className="app-container">
        {isHomePage && (
          <div className="home-content">
            <h1>{welcomeMessage}</h1>
            <button onClick={getRandomMessage}>Get Random Welcome Message</button>
            <div className="button-group">
              <button onClick={() => window.location.href = '/blogs'}>View Blogs</button>
              <button onClick={() => window.location.href = '/portfolio'}>View Portfolio</button>
              <button onClick={() => window.location.href = '/sign-in'}>Sign In</button>
              <button onClick={() => window.location.href = '/sign-up'}>Sign Up</button>
              <button onClick={() => window.location.href = '/contactme'}>Contact Me</button>
            </div>
          </div>
        )}
        
        <main>
          <Routes>
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/blogs/create" element={<BlogCreate />} />
            <Route path="/blogs/edit/:id" element={<BlogEdit />} />
            <Route path="/blogs/delete/:id" element={<BlogDelete />} />
            <Route path="/portfolio" element={<PortfolioList />} />
            <Route path="/portfolio/:id" element={<PortfolioDetail />} />
            <Route path="/portfolio/create" element={<PortfolioCreate />} />
            <Route path="/portfolio/edit/:id" element={<PortfolioEdit />} />
            <Route path="/portfolio/delete/:id" element={<PortfolioDelete />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/contactme" element={<ContactMe />} />
            <Route path="/comments" element={<CommentList />} />
            <Route path="/comments/create" element={<CommentCreate />} />
            <Route path="/comments/edit/:id" element={<CommentEdit />} />
            <Route path="/comments/delete/:id" element={<CommentDelete />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
