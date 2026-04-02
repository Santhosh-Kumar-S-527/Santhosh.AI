import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrainCircuit, Menu, X, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setIsDark(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const toggleMenu = () => setMobileOpen(!mobileOpen);
  const closeMenu = () => setMobileOpen(false);

  return (
    <nav className="navbar glass">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <BrainCircuit className="logo-icon" />
          <span>Santhosh<span className="logo-accent">.AI</span></span>
        </Link>
        
        <div className="nav-actions">
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <div className="mobile-toggle" onClick={toggleMenu}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>

        <div className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>Home</Link>
          <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`} onClick={closeMenu}>Projects</Link>
          <Link to="/coding-profiles" className={`nav-link ${location.pathname === '/coding-profiles' ? 'active' : ''}`} onClick={closeMenu}>Coding Profiles</Link>
          <Link to="/certifications" className={`nav-link ${location.pathname === '/certifications' ? 'active' : ''}`} onClick={closeMenu}>Certifications</Link>
          <Link to="/analyzer" className={`nav-link ${location.pathname === '/analyzer' ? 'active' : ''}`} onClick={closeMenu}>Resume Analyzer</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
