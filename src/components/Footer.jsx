import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h3>Santhosh Kumar</h3>
          <p>AI & Data Science Student</p>
        </div>
        <div className="footer-links">
          <a href="mailto:santhosh050207@gmail.com" className="footer-link">Gmail</a>
          <a href="https://www.linkedin.com/in/santhosh-kumar-s-187389329/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <a href="https://github.com/Santhosh-Kumar-S-527" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Santhosh Kumar. AI-Powered Portfolio.</p>
      </div>
    </footer>
  );
}

export default Footer;
