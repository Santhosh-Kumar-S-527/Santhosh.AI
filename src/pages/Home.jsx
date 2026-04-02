import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit, Code, Database, Download, GraduationCap, Calendar, Trophy } from 'lucide-react';
import resumePdf from '../assets/S Santhosh Kumar Resume (1).pdf';
import './Home.css';

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [mounted, setMounted] = useState(false);

  const phrases = [
    "Hi, I'm Santhosh Kumar",
    "AI & Data Science Student",
    "Passionate about building intelligent systems"
  ];

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science",
      institution: "Sri Eshwar College of Engineering",
      duration: "2024 - 2028",
      score: "CGPA: 8.19"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Nadar Matric Higher Secondary School, Rajapalayam",
      duration: "2022 - 2024",
      score: "Percentage: 97.3%"
    },
    {
      degree: "Secondary Education",
      institution: "Nadar Matric Higher Secondary School, Rajapalayam",
      duration: "2021 - 2022",
      score: "Percentage: 95.6%"
    }
  ];

  const skills = [
    { name: "Python", percentage: 90, color: "#eab308" },
    { name: "AI & Machine Learning", percentage: 85, color: "#8b5cf6" },
    { name: "Data Science", percentage: 80, color: "#3b82f6" },
    { name: "Web Development", percentage: 75, color: "#10b981" },
  ];

  return (
    <div className="home animate-fade-in">
      <section className="hero-section">
        <div className="hero-content">
          <div className="badge glass">
            <span className="badge-dot"></span> Available for Hackathons
          </div>
          <h1 className="hero-title">
            <span className="gradient-text gradient-glow">{text}</span><span className="cursor-blink">|</span>
          </h1>
          <p className="hero-description">
            Passionate about building intelligent systems and modern web applications. 
            Bridging the gap between cutting-edge AI research and practical, user-friendly solutions.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </Link>
            <a href={resumePdf} download="Santhosh_Kumar_Resume.pdf" className="btn btn-outline download-btn">
              Download Resume <Download size={18} />
            </a>
            <Link to="/analyzer" className="btn btn-outline">
              Analyzer <BrainCircuit size={18} />
            </Link>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="visual-circle circle-1"></div>
          <div className="visual-circle circle-2 absolute"></div>
          <div className="glass visual-card card-1 float-animation">
            <Code className="card-icon" />
            <span>Web Dev</span>
          </div>
          <div className="glass visual-card card-2 float-animation-delayed">
            <BrainCircuit className="card-icon" />
            <span>AI & ML</span>
          </div>
          <div className="glass visual-card card-3 float-animation">
            <Database className="card-icon" />
            <span>Data Science</span>
          </div>
        </div>
      </section>

      <section className="education-section">
        <h2 className="section-title-centered">
          <GraduationCap className="title-icon" size={36} style={{ display: 'inline', verticalAlign: 'bottom', color: 'var(--accent)' }}/> <span className="gradient-text">Education</span>
        </h2>
        <div className="education-timeline">
          {education.map((item, index) => (
            <div key={index} className="education-card glass animate-fade-in">
              <div className="education-header">
                <h3 className="education-degree">{item.degree}</h3>
                <span className="education-duration"><Calendar size={16} /> {item.duration}</span>
              </div>
              <p className="education-institution">{item.institution}</p>
              <div className="education-score">
                <Trophy size={16} style={{ color: 'var(--accent)' }} /> <span className="highlight-score">{item.score}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <h2 className="section-title-centered">Technical <span className="gradient-text">Skills</span></h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card glass">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="progress-bar-bg">
                <div 
                  className="progress-bar-fill" 
                  style={{ 
                    width: mounted ? `${skill.percentage}%` : '0%', 
                    background: `linear-gradient(90deg, ${skill.color}90, ${skill.color})`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
