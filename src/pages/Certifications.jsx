import { Award, ExternalLink, Coffee, Code2, MonitorCheck } from 'lucide-react';
import './Certifications.css';

const certifications = [
  {
    id: 1,
    title: 'Programming in Java',
    platform: 'NPTEL',
    description: 'Learned core Java concepts including OOP, data structures, and problem-solving techniques',
    link: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs110/Course/NPTEL25CS110S45430067810821946.pdf',
    icon: <Coffee size={32} />
  },
  {
    id: 2,
    title: 'Python – Introduction to Data Science and Machine Learning A-Z',
    platform: 'Udemy',
    description: 'Gained hands-on experience in Python, data analysis, and machine learning fundamentals',
    link: 'https://www.udemy.com/certificate/UC-10336a07-869b-4b93-b745-50c94051568d/',
    icon: <Code2 size={32} />
  },
  {
    id: 3,
    title: 'Mastering Data Structures & Algorithms using C and C++',
    platform: 'Udemy',
    description: 'Developed strong problem-solving skills using data structures and algorithms in C/C++',
    link: 'https://www.udemy.com/certificate/UC-27d08d4c-a345-41ba-90b2-352873813f3f/',
    icon: <MonitorCheck size={32} />
  }
];

const Certifications = () => {
  return (
    <div className="certs-page animate-fade-in container">
      <div className="certs-header">
        <h1 className="page-title">
          <Award className="title-icon" size={40} /> My <span className="gradient-text">Certifications</span>
        </h1>
        <p className="page-subtitle highlight-line">
          “Certified in Java, Python, Data Science, and Advanced Data Structures & Algorithms.”
        </p>
      </div>

      <div className="certs-grid">
        {certifications.map(cert => (
          <div key={cert.id} className="cert-card glass">
            <div className="cert-icon-container">
              <span className="cert-emoji-icon">{cert.icon}</span>
            </div>
            <div className="cert-content">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-platform"><strong>Platform:</strong> {cert.platform}</p>
              <p className="cert-description">{cert.description}</p>
            </div>
            <div className="cert-footer">
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary full-width">
                <ExternalLink size={18} /> View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
