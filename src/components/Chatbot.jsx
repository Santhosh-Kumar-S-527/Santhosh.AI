import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Santhosh's AI Assistant. How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('portfolio') || lowerMessage.includes('website') || lowerMessage.includes('this site')) {
      return "This portfolio is a modern React application featuring a custom AI Resume Analyzer, dynamic Projects showcasing my full-stack and ML capabilities, and dedicated pages for my Certifications and Coding Profiles.";
    } else if (lowerMessage.includes('who are you') || (lowerMessage.includes('about') && lowerMessage.includes('you')) || lowerMessage.includes('name')) {
      return "I am Santhosh Kumar, an Artificial Intelligence and Data Science student passionate about building intelligent systems and scalable web applications.";
    } else if (lowerMessage.includes('resume') || lowerMessage.includes('analyze')) {
      return "The Resume Analyzer is my flagship feature! You can paste your resume text on its page to get an instant simulated AI analysis, skills checklist, and score.";
    } else if (lowerMessage.includes('certificat')) {
      return "I hold certifications in Java (NPTEL), Python for Data Science (Udemy), and Data Structures & Algorithms in C/C++ (Udemy).";
    } else if (lowerMessage.includes('coding') || lowerMessage.includes('leetcode') || lowerMessage.includes('hackerrank') || lowerMessage.includes('codechef') || lowerMessage.includes('skillrack')) {
      return "I actively solve problems! I have 365+ problems solved on LeetCode and 1475+ on Skillrack. I also hold strong ranks on HackerRank and CodeChef. Check my Coding Profiles page!";
    } else if (lowerMessage.includes('cibobo') || lowerMessage.includes('food')) {
      return "Cibobo is my full-stack MERN food ordering and delivery platform featuring real-time tracking, role-based access, and a custom cart system.";
    } else if (lowerMessage.includes('event') || lowerMessage.includes('sanoholic')) {
      return "The Event Booking system is a unified MERN platform for users, organizers, and admins to create, secure, and manage events.";
    } else if (lowerMessage.includes('project')) {
      return "I have worked on projects like AIrDraw, NLP Audio Translator, Astro Analytics System, Event Booking, and Cibobo. You can view them all on the Projects page!";
    } else if (lowerMessage.includes('airdraw') || lowerMessage.includes('gesture')) {
      return "AIrDraw is a hand gesture drawing system using OpenCV and MediaPipe. It allows you to draw on a virtual canvas using just your index finger!";
    } else if (lowerMessage.includes('skill')) {
      return "My core skills include AI, Data Science, Python, Machine Learning, Web Development, and the MERN stack (MongoDB, Express, React, Node).";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('freelance') || lowerMessage.includes('job')) {
      return "I'm always open to new opportunities and hackathons! You can contact me via the Contact page, LinkedIn, or directly at santhosh050207@gmail.com.";
    } else if (lowerMessage.includes('education') || lowerMessage.includes('degree')) {
      return "I am pursuing a degree in Artificial Intelligence and Data Science.";
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi ') || lowerMessage === 'hi' || lowerMessage.includes('hey')) {
      return "Hello! How can I assist you today? I can tell you about this portfolio, Santhosh's skills, or his projects.";
    } else if (lowerMessage.includes('thank')) {
      return "You're very welcome! Let me know if you need anything else.";
    } else {
      return "I'm here to help! Try asking me about 'this portfolio', 'skills', 'certifications', 'coding profiles', or specific projects like 'Cibobo'.";
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMsg = { text: inputValue, isBot: false };
    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = { text: getBotResponse(newUserMsg.text), isBot: true };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      {isOpen ? (
        <div className="chatbot-window glass animate-slide-up">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <Bot size={20} />
              <span>AI Assistant</span>
            </div>
            <button className="chatbot-close-btn" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.isBot ? 'bot-message' : 'user-message'}`}>
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="chat-message bot-message typing-indicator">
                <span>AI is typing</span>
                <span className="dot">.</span><span className="dot">.</span><span className="dot">.</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <form className="chatbot-input-area" onSubmit={handleSend}>
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..." 
              autoFocus
            />
            <button type="submit" className="chatbot-send-btn" disabled={!inputValue.trim() || isTyping}>
              <Send size={18} />
            </button>
          </form>
        </div>
      ) : (
        <button className="chatbot-toggle-btn bounce" onClick={() => setIsOpen(true)}>
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
