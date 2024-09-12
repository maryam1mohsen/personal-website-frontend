import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/navbar/Navbar';
import BlogList from './components/blog/BlogList';
import BlogDetail from './components/blog/BlogDetail';
import BlogCreate from './components/blog/BlogCreate';
import BlogEdit from './components/blog/BlogEdit';
import SignInForm from './components/auth/SignInForm';
import SignUpForm from './components/auth/SignUpForm';
import ContactForm from './components/contact/ContactForm';
// import Portfolio from './components/portfolio/Portfolio';
// import MyServices from './components/myservices/MyServices';
import authService from './services/authService';

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const location = useLocation();

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  const isHomePage = location.pathname === '/';

  return (
    <div id="root" className={isHomePage ? 'home-page' : 'other-page'}>
      <Navbar user={user} handleSignout={handleSignout} />

      {isHomePage && (
        <div className="home-content">
          <h4>Hello, welcome to</h4>
          <h1 className="glowing-title">
            My <span>Website</span>
          </h1>
          <h3>Discover amazing content and features</h3>
        </div>
      )}

      <main className={isHomePage ? 'main-content home-page' : 'main-content'}>
        <Routes>
          <Route path="/" element={<div />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/blogs/create" element={<BlogCreate />} />
          <Route path="/blogs/:id/edit" element={<BlogEdit />} />
          <Route path="/signup" element={<SignUpForm setUser={setUser} />} />
          <Route path="/signin" element={<SignInForm setUser={setUser} />} />
          <Route path="/contactme" element={<ContactForm />} />
          {/* <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<MyServices />} /> */}
        </Routes>
      </main>
    </div>
  );
};

export default App;
