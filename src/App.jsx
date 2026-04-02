import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Certifications from './pages/Certifications';
import ResumeAnalyzer from './pages/ResumeAnalyzer';
import Contact from './pages/Contact';
import CodingProfiles from './pages/CodingProfiles';
import Chatbot from './components/Chatbot';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/coding-profiles" element={<CodingProfiles />} />
          <Route path="/analyzer" element={<ResumeAnalyzer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Chatbot />
      <Footer />
    </Router>
  );
}

export default App;
