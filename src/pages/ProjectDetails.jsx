import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Code, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projects } from '../utils/projects';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="project-details-page container not-found">
        <h2>Project Not Found</h2>
        <Link to="/projects" className="btn btn-primary">
          <ArrowLeft size={18} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="project-details-page animate-fade-in container">
      <Link to="/projects" className="back-link">
        <ArrowLeft size={18} /> Back to Projects
      </Link>
      
      <div className="details-header text-center">
        <h1 className="details-title">{project.title}</h1>
        <h2 className="details-tagline">{project.tagline}</h2>
        <div className="details-tags center-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="details-hero">
        <img src={project.image} alt={project.title} className="details-image" />
      </div>

      <div className="details-content glass">
        <div className="details-section">
          <h2>Problem</h2>
          {Array.isArray(project.problem) ? (
            <ul className="text-list">
              {project.problem.map((item, i) => <li key={i} className="list-item">{item}</li>)}
            </ul>
          ) : (
            <p className="long-description">{project.problem}</p>
          )}
        </div>

        <div className="details-section">
          <h2>Solution</h2>
          {Array.isArray(project.solution) ? (
            <ul className="text-list">
              {project.solution.map((item, i) => <li key={i} className="list-item">{item}</li>)}
            </ul>
          ) : (
            <p className="long-description">{project.solution}</p>
          )}
        </div>

        <div className="details-section">
          <h2>Tech Stack</h2>
          <div className="tech-stack-grid">
            {project.techStack.map((tech, i) => (
              <span key={i} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>

        <div className="details-section">
          <h2>Key Features</h2>
          <ul className="features-list">
            {project.features.map((feature, i) => (
              <li key={i} className="feature-item">
                <CheckCircle2 size={18} color="var(--success)" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="details-actions">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <Code size={18} /> View Source Code
          </a>
          {project.demo === '#' ? (
             <button className="btn btn-primary" disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>
               <ExternalLink size={18} /> Live Demo (Coming Soon)
             </button>
          ) : (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
        </div>

        <div className="details-section impact-section">
          <h2>Impact</h2>
          {Array.isArray(project.impact) ? (
            <ul className="text-list impact-list">
              {project.impact.map((item, i) => <li key={i} className="list-item">{item}</li>)}
            </ul>
          ) : (
            <p className="long-description impact-text">{project.impact}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
