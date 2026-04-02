import { useState } from 'react';
import { Mail, User, Code, Send, Copy, CheckCircle2, Loader2 } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate network request
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('santhosh050207@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contact-page animate-fade-in container">
      <div className="contact-header">
        <h1 className="page-title">Contact <span className="gradient-text">Me</span></h1>
        <p className="page-subtitle">
          Feel free to reach out for collaborations, project discussions, or any opportunities in AI, Data Science, and Web Development.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info glass">
          <h2>Get in Touch</h2>
          <p className="info-description">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="info-links">
            <div className="info-item">
              <div className="icon-wrapper"><Mail size={20} /></div>
              <div className="info-details">
                <span className="info-label">Email</span>
                <span className="info-value">santhosh050207@gmail.com</span>
              </div>
              <button 
                className="btn btn-outline btn-copy" 
                onClick={copyEmail}
                title="Copy Email"
              >
                {copied ? <CheckCircle2 size={16} color="var(--success)" /> : <Copy size={16} />}
              </button>
            </div>
            
            <a href="https://www.linkedin.com/in/santhosh-kumar-s-187389329/" target="_blank" rel="noopener noreferrer" className="info-item clickable">
              <div className="icon-wrapper"><User size={20} /></div>
              <div className="info-details">
                <span className="info-label">LinkedIn</span>
                <span className="info-value">Santhosh Kumar S</span>
              </div>
            </a>
            
            <a href="https://github.com/Santhosh-Kumar-S-527" target="_blank" rel="noopener noreferrer" className="info-item clickable">
              <div className="icon-wrapper"><Code size={20} /></div>
              <div className="info-details">
                <span className="info-label">GitHub</span>
                <span className="info-value">Santhosh-Kumar-S-527</span>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-form-container glass">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="John Doe" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="john@example.com" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Hello there..." 
                rows="5" 
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`btn btn-primary submit-btn ${status === 'success' ? 'success-state' : ''}`}
              disabled={status !== 'idle'}
            >
              {status === 'idle' && <><Send size={18} /> Send Message</>}
              {status === 'sending' && <><Loader2 size={18} className="animate-spin" /> Sending...</>}
              {status === 'success' && <><CheckCircle2 size={18} /> Message sent successfully!</>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
