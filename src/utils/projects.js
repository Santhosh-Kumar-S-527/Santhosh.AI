import airdrawImg from '../assets/Screenshot 2026-04-02 220017.png';
import nlpImg from '../assets/Screenshot 2026-04-02 220240.png';
import astroImg from '../assets/Screenshot 2026-04-02 220914.png';
import eventImg from '../assets/Screenshot 2026-04-02 221346.png';

import imgAirDraw from '../assets/Screenshot 2026-04-02 220017.png';
import imgNlpAudio from '../assets/Screenshot 2026-04-02 220240.png';
import imgAstro from '../assets/Screenshot 2026-04-02 220914.png';
import imgEventBooking from '../assets/Screenshot 2026-04-02 221346.png';

export const projects = [
  {
    id: 'airdraw',
    title: 'AIrDraw – Hand Gesture Drawing using AI',
    tagline: '“Draw effortlessly in the air using real-time hand gesture recognition.”',
    description: 'An AI-powered application that lets users draw on screen using hand gestures tracked by computer vision.',
    problem: [
      'Traditional drawing systems rely on physical input devices like mouse or stylus',
      'Lack of touchless interaction in digital creative tools',
      'Limited accessibility for users who prefer gesture-based control'
    ],
    solution: [
      'AIrDraw introduces a gesture-based drawing system that uses a webcam to track hand movements in real time.',
      'By detecting hand landmarks, the system allows users to draw on a virtual canvas using just their index finger — no physical contact required.'
    ],
    techStack: ['Python', 'OpenCV', 'MediaPipe', 'Tkinter'],
    features: [
      'Real-time hand tracking using webcam',
      'Draw using index finger movement',
      'Smooth and responsive virtual canvas',
      'Gesture-based controls (draw, pause, clear)',
      'Lightweight and easy-to-use interface'
    ],
    impact: [
      'Enables touchless human-computer interaction',
      'Useful in smart classrooms and interactive learning',
      'Can be extended to AR/VR and creative applications',
      'Demonstrates practical use of AI in real-time systems'
    ],
    tags: ['AI', 'Computer Vision', 'Python'],
    image: imgAirDraw,
    github: 'https://github.com/Santhosh-Kumar-S-527/AIr-Draw-Hand-Gesture-Drawing-Using-AI',
    demo: '#'
  },
  {
    id: 'nlp-audio',
    title: 'NLP Audio Translator – Voice to Multilingual Translation System',
    tagline: '“Speak, translate, and listen — breaking language barriers with AI.”',
    description: 'Real-time audio translation system utilizing advanced Natural Language Processing models.',
    problem: [
      'Language barriers make communication difficult',
      'Manual translation is slow and inconvenient',
      'Lack of real-time voice-based translation tools'
    ],
    solution: [
      'This project converts spoken language into text, processes it using NLP, and translates it into the desired language.',
      'It also provides audio output, enabling seamless multilingual communication.'
    ],
    techStack: [
      'Python', 
      'SpeechRecognition', 
      'Google Translate API', 
      'Text-to-Speech (TTS)', 
      'NLP techniques'
    ],
    features: [
      'Voice input using microphone',
      'Real-time speech-to-text conversion',
      'Multilingual translation support',
      'Text-to-speech output',
      'Download translated text/audio'
    ],
    impact: [
      'Helps in cross-language communication',
      'Useful for travelers and students',
      'Improves accessibility and inclusivity',
      'Demonstrates real-world NLP application'
    ],
    tags: ['NLP', 'AI', 'Python'],
    image: imgNlpAudio,
    github: 'https://github.com/Santhosh-Kumar-S-527/NLP',
    demo: '#'
  },
  {
    id: 'astro-analytics',
    title: 'Astro Analytics System – Machine Learning Dashboard for Space Exploration',
    tagline: '“Analyzing the universe with data — from asteroids to galaxies using AI.”',
    description: 'An interactive machine learning dashboard that analyzes different space objects using specialized models.',
    problem: [
      'Space datasets are large and complex to analyze manually',
      'Identifying hazardous asteroids requires advanced analysis',
      'Understanding exoplanet properties is time-consuming',
      'Classifying stars and galaxies needs expert knowledge',
      'Lack of unified tools to analyze multiple space domains in one system'
    ],
    solution: [
      'This project is an interactive machine learning dashboard that analyzes different space objects using specialized models.',
      'It allows users to upload datasets and get instant predictions, classifications, and clustering results with visual insights.',
      'The system combines multiple ML techniques to simplify complex astronomical analysis into an easy-to-use interface.'
    ],
    techStack: [
      'Python', 
      'Streamlit', 
      'Pandas, NumPy', 
      'Scikit-learn', 
      'XGBoost', 
      'Matplotlib, Seaborn'
    ],
    features: [
      'Asteroid hazard prediction using XGBoost',
      'Exoplanet temperature prediction using Random Forest',
      'Star classification (Dwarf vs Giant) with H-R diagram visualization',
      'Galaxy clustering using PCA and K-Means',
      'Interactive dashboard with file upload support',
      'Real-time model evaluation with graphs and metrics',
      'Feature importance and scientific visualizations'
    ],
    impact: [
      'Helps understand space data using machine learning',
      'Demonstrates real-world applications of classification, regression, and clustering',
      'Useful for students learning data science and astronomy',
      'Simplifies complex astronomical analysis into an interactive system',
      'Showcases end-to-end ML pipeline in a single project'
    ],
    tags: ['Data Science', 'Streamlit', 'Machine Learning'],
    image: imgAstro,
    github: 'https://github.com/Santhosh-Kumar-S-527/ds',
    demo: '#'
  },
  {
    id: 'event-booking',
    title: 'Event Booking and Management System',
    tagline: '“Discover, book, and manage events seamlessly with role-based access.”',
    description: 'A centralized platform for browsing, booking, and creating events with user, organizer, and admin dashboards.',
    problem: [
      'Managing events manually is inefficient',
      'No centralized platform for users, organizers, and admins',
      'Difficult to control bookings and event capacity',
      'Lack of structured approval for event organizers'
    ],
    solution: [
      'This project provides a centralized platform where users can browse and book events, organizers can create and manage events, and admins can control the system with approval workflows and analytics dashboards.',
      'It ensures secure access, efficient booking management, and streamlined event handling.'
    ],
    techStack: [
      'MongoDB', 
      'Express.js', 
      'React.js', 
      'Node.js', 
      'JWT', 
      'bcrypt', 
      'Tailwind CSS'
    ],
    features: [
      'Role-based access (User / Organizer / Admin)',
      'Secure JWT authentication',
      'Event creation and management',
      'Event booking with capacity validation',
      'Organizer approval workflow',
      'Admin dashboard for managing users, events, and bookings',
      'Responsive UI using React and Tailwind'
    ],
    impact: [
      'Simplifies event discovery and booking',
      'Provides structured event management system',
      'Demonstrates real-world full-stack application',
      'Showcases authentication, RBAC, and API design skills'
    ],
    tags: ['MERN', 'React', 'Full-Stack'],
    image: imgEventBooking,
    github: 'https://github.com/Santhosh-Kumar-S-527/Sanoholic_Event_Booking_System',
    demo: 'https://sanoholic-event-booking-system.vercel.app/'
  },
  {
    id: 'cibobo',
    title: 'Cibobo – Food Ordering & Delivery Platform',
    tagline: '“Seamless food ordering experience — from discovery to delivery in one smart platform.”',
    description: 'A full-stack MERN platform connecting customers, restaurants, delivery personnel, and admins in a unified food ordering system.',
    problem: [
      'Managing food orders across customers, restaurants, and delivery agents is complex',
      'Lack of centralized systems for real-time order tracking and coordination',
      'Inefficient manual processes for delivery assignment and status updates',
      'Poor user experience in many basic food ordering applications'
    ],
    solution: [
      'This project provides a full-stack MERN-based platform that connects customers, restaurants, delivery personnel, and admins in a unified system.',
      'It enables seamless food discovery, secure ordering, real-time order tracking, and efficient delivery management with role-based access and optimized workflows.'
    ],
    techStack: [
      'MongoDB', 
      'Express.js', 
      'React.js (Vite)', 
      'Node.js', 
      'JWT Authentication', 
      'Axios', 
      'Mongoose', 
      'Tailwind CSS',
      'Lucide-React'
    ],
    features: [
      'Role-based access (Customer, Restaurant Owner, Delivery Personnel, Admin)',
      'Smart restaurant discovery with search and category filters',
      'Cart management and streamlined checkout (Cibobo Pay)',
      'Real-time order tracking with status progress bar',
      'Review and rating system with automatic updates',
      'Admin panel for delivery assignment and system control',
      'Profile management with global data synchronization'
    ],
    impact: [
      'Simplifies end-to-end food delivery management',
      'Improves coordination between multiple user roles',
      'Enhances user experience with real-time tracking and intuitive UI',
      'Demonstrates strong full-stack MERN development and system design skills'
    ],
    tags: ['MERN', 'Food Delivery', 'Full-Stack'],
    image: 'https://cdn.dribbble.com/userupload/30566759/file/original-46d476c7511e4dc98a2c278d749cf0b9.png?resize=400x0',
    github: 'https://github.com/Santhosh-Kumar-S-527/Cibobo-Food-Ordering-Delivery-Platform',
    demo: '#'
  }
];
