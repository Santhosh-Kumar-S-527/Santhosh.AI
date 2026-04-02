import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { projects } from '../utils/projects';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'AI', 'NLP', 'Data Science', 'MERN'];

  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true;
    return project.tags.includes(filter);
  });

  return (
    <div className="projects-page animate-fade-in container">
      <div className="projects-header">
        <h1 className="page-title">Featured <span className="gradient-text">Projects</span></h1>
        <p className="page-subtitle">A collection of my recent work in AI, Data Science, and Web Development.</p>
      </div>

      <div className="projects-filter">
        {categories.map((category) => (
          <button 
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card glass animate-fade-in">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <Link to={`/projects/${project.id}`} className="btn btn-primary">
                  <ExternalLink size={18} /> View Project
                </Link>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
