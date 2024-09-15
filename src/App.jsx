import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';



// Components
import Navbar from './components/navbar/Navbar';
import BlogList from './components/blog/BlogList';
import BlogDetail from './components/blog/BlogDetail';
import BlogCreate from './components/blog/BlogCreate';
import BlogEdit from './components/blog/BlogEdit';
import SignInForm from './components/auth/SignInForm';
import SignUpForm from './components/auth/SignUpForm';
import ContactForm from './components/contact/ContactForm';
import Portfolio from './components/portfolio/Portfolio';
import MyServices from './components/myservices/myservices';
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
        <section className="main-content">
          {/* About Me Section */}
          <div className="about-me">
            <div className="text">
              <h2>About Me</h2>
              <p>
                I am Maryam Ebrahim, a passionate and creative individual with a love for design and technology. I am a dedicated and enthusiastic graduate, having completed my studies in Web Media at Bahrain Polytechnic. My educational journey has provided me with a strong foundation in various aspects of web development, design, and digital marketing. With a passion for creativity, I find joy in bringing innovative ideas to life through my work. I thrive on the opportunity to work on diverse projects, each presenting a unique canvas for creativity. Outside of the digital world, I indulge in my love for painting, vlogging, baking, and reading. As I navigate my professional path, my goal is to not only apply my knowledge but also to contribute to the ever-evolving landscape of web media with my unique perspective and creative flair.
              </p>
            </div>
            <div className="image">
              <img src="images/maryam1.png" alt="My Photo" />
            </div>
          </div>

          {/* Software Skills Section */}
          <div className="software-skills">
            <h2>Software I Use</h2>
            <ul>
              <li>
                <img src="images/ps.png" alt="Graphic Design Logo" />
                <p>Photoshop</p>
              </li>
              <li>
                <img src="images/ai.png" alt="Web Development Logo" />
                <p>Illustrator</p>
              </li>
              <li>
                <img src="images/an.png" alt="Video Editing Logo" />
                <p>Adobe Animate</p>
              </li>
              <li>
                <img src="images/ae.png" alt="Video Editing Logo" />
                <p>After Effects</p>
              </li>
              <li>
                <img src="images/pr.png" alt="Video Editing Logo" />
                <p>Premiere Pro</p>
              </li>
              <li>
                <img src="images/id.png" alt="Video Editing Logo" />
                <p>Adobe InDesign</p>
              </li>
              <li>
                <img src="images/au.png" alt="Video Editing Logo" />
                <p>Adobe Audition</p>
              </li>
              <li>
                <img src="images/xd.png" alt="Video Editing Logo" />
                <p>Adobe XD</p>
              </li>
              <li>
                <img src="images/blender.png" alt="Video Editing Logo" />
                <p>Blender</p>
              </li>
              <li>
                <img src="images/unity.png" alt="Video Editing Logo" />
                <p>Unity</p>
              </li>
            </ul>
          </div>
        </section>
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
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<MyServices />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
