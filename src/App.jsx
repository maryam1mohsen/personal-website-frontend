// import { Routes, Route, useLocation } from 'react-router-dom';

// // Components
// import Navbar from './components/navbar/Navbar';
// // import Footer from './components/footer/Footer';
// import BlogList from './components/blog/BlogList';
// import BlogDetail from './components/blog/BlogDetail';
// import BlogCreate from './components/blog/BlogCreate';
// import BlogEdit from './components/blog/BlogEdit';
// // import PortfolioList from './components/portfolio/PortfolioList';
// // import PortfolioDetail from './components/portfolio/PortfolioDetail';
// // import PortfolioCreate from './components/portfolio/PortfolioCreate';
// // import PortfolioEdit from './components/portfolio/PortfolioEdit';
// // import PortfolioDelete from './components/portfolio/PortfolioDelete';
// import SignInForm from './components/auth/SignInForm';
// import SignUpForm from './components/auth/SignUpForm';
// import ContactForm from './components/contact/ContactForm';
// // import CommentForm from './components/comments/CommentForm';
// // import Comments from './components/comments/Comments';


// const App = () => {
//   const [user, setUser] = useState(authService.getUser());
//   const location = useLocation();

//   const handleSignout = () => {
//     authService.signout();
//     setUser(null);
//   };

  
//   const isHomePage = location.pathname === '/';

//   return (
//     <div id="root" className={isHomePage ? 'home-page' : 'other-page'}>
//       <Navbar user={user} handleSignout={handleSignout}/>

//       {isHomePage && (
//         <div className="home-content">
//           <h4>Hello, welcome to</h4>
//           <h1 className="glowing-title">
//             My <span>Website</span>
//           </h1>
//           <h3>Discover amazing content and features</h3>
//           <div className="button-group">
//             <a className="button" href="/blogs">View Blogs</a>
//             <a className="button" href="/portfolio">View Portfolio</a>
//             <a className="button" href="/signin">Sign In</a>
//             <a className="button" href="/signup">Sign Up</a>
//             <a className="button" href="/contactme">Contact Me</a>
//           </div>
//         </div>
//       )}

//       <main className={isHomePage ? 'main-content home-page' : 'main-content'}>
//         <Routes>
//           <Route path="/blogs" element={<BlogList />} />
//           <Route path="/blogs/:id" element={<BlogDetail />} />
//           <Route path="/blogs/create" element={<BlogCreate />} />
//           <Route path="/blogs/:id/edit" element={<BlogEdit />} />
          
//           {/* <Route path="/portfolio" element={<PortfolioList />} />
//           <Route path="/portfolio/:id" element={<PortfolioDetail />} />
//           <Route path="/portfolio/create" element={<PortfolioCreate />} />
//           <Route path="/portfolio/edit/:id" element={<PortfolioEdit />} />
//           <Route path="/portfolio/delete/:id" element={<PortfolioDelete />} /> */}
//           <Route path="/signup" element={<SignInForm setUser={setUser} />} />
//           <Route path="/signin" element={<SignUpForm setUser={setUser} />} />
//           <Route path="/contactme" element={<ContactForm />} />
//           {/* <Route path="/comments" element={<CommentList />} /> */}
//           {/* <Route path="/comments/create" element={<CommentForm />} /> */}
//           {/* <Route path="/comments/edit/:id" element={<CommentEdit />} />
//           <Route path="/comments/delete/:id" element={<CommentDelete />} /> */}
//         </Routes>
//       </main>

    
//     </div>
//   );
// };

// export default App;
import { useState } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';

// Components
import Navbar from './components/navbar/Navbar';
import BlogList from './components/blog/BlogList';
import BlogDetail from './components/blog/BlogDetail';
import BlogCreate from './components/blog/BlogCreate';
import BlogEdit from './components/blog/BlogEdit';
import SignInForm from './components/auth/SignInForm';
import SignUpForm from './components/auth/SignUpForm';
import ContactForm from './components/contact/ContactForm';
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
          <div className="button-group">
            <Link className="button" to="/blogs">View Blogs</Link>
            <Link className="button" to="/portfolio">View Portfolio</Link>
            <Link className="button" to="/signin">Sign In</Link>
            <Link className="button" to="/signup">Sign Up</Link>
            <Link className="button" to="/contactme">Contact Me</Link>
          </div>
        </div>
      )}

      <main className={isHomePage ? 'main-content home-page' : 'main-content'}>
        <Routes>
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/blogs/create" element={<BlogCreate />} />
          <Route path="/blogs/:id/edit" element={<BlogEdit />} />
          <Route path="/signup" element={<SignUpForm setUser={setUser} />} />
          <Route path="/signin" element={<SignInForm setUser={setUser} />} />
          <Route path="/contactme" element={<ContactForm />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
