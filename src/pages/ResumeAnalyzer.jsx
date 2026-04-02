import { useState } from 'react';
import { Brain, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { analyzeResume } from '../utils/analyzer';
import './ResumeAnalyzer.css';

const ResumeAnalyzer = () => {
  const [text, setText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  const handleAnalyze = async () => {
    if (!text.trim()) return;
    setAnalyzing(true);
    setResults(null);
    
    const analysis = await analyzeResume(text);
    
    setAnalyzing(false);
    setResults(analysis);
  };

  return (
    <div className="analyzer-page animate-fade-in container">
      <div className="analyzer-header">
        <h1 className="page-title">Resume <span className="gradient-text">Analyzer</span></h1>
        <p className="page-subtitle">Paste your resume text below for instant AI-powered feedback.</p>
      </div>

      <div className="analyzer-content">
        <div className="input-section glass">
          <textarea
            className="resume-input"
            placeholder="Paste your resume content here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div className="input-actions">
            <button 
              className="btn btn-primary analyze-btn" 
              onClick={handleAnalyze}
              disabled={analyzing || !text.trim()}
            >
              {analyzing ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> Analyzing your resume...
                </>
              ) : (
                <>
                  <Brain size={20} /> Analyze Resume
                </>
              )}
            </button>
          </div>
        </div>

        {results && (
          <div className="results-section glass animate-fade-in">
            <div className="score-header">
              <h2>Overall AI Score</h2>
              <div className="score-display">
                <span className="score-number">{results.score}</span>
                <span className="score-total">/100</span>
              </div>
            </div>

            <div className="results-grid">
              <div className="result-card">
                <h3><CheckCircle2 color="var(--success)" size={20} /> Detected Skills</h3>
                {results.detectedSkills.length > 0 ? (
                  <ul className="skills-list">
                    {results.detectedSkills.map((skill, index) => (
                      <li key={index} className="skill-item">
                        <CheckCircle2 size={16} color="var(--success)" /> 
                        {skill.charAt(0).toUpperCase() + skill.slice(1)}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="no-data">No specific tech skills detected.</p>
                )}
              </div>

              <div className="result-card">
                <h3><AlertCircle color="#f59e0b" size={20} /> Actionable Suggestions</h3>
                <ul className="suggestions-list">
                  {results.suggestions.map((suggestion, index) => (
                    <li key={index} className="suggestion-item">
                      <span className="bullet-point"></span> {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeAnalyzer;
