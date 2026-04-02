export const analyzeResume = async (text) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  const lowerText = text.toLowerCase();
  
  // Keyword matching
  const skillsList = ['python', 'java', 'c++', 'javascript', 'react', 'node', 'sql', 'machine learning', 'ai', 'data science', 'nlp', 'deep learning', 'pandas', 'tensorflow'];
  
  const detectedSkills = skillsList.filter(skill => lowerText.includes(skill));
  
  let score = 50; // base score
  score += detectedSkills.length * 5;
  if (score > 100) score = 100;
  
  const suggestions = [];
  if (!lowerText.includes('machine learning') && !lowerText.includes('ai')) {
    suggestions.push('Consider adding AI/ML keywords if applying for AI roles.');
  }
  if (!lowerText.includes('project') && !lowerText.includes('github')) {
    suggestions.push('Add more real-world projects and link your GitHub repository.');
  }
  if (detectedSkills.length < 3) {
    suggestions.push('Highlight more specific technical skills, programming languages, and tools.');
  }
  
  if (suggestions.length === 0) {
    suggestions.push('Great resume format and keyword coverage! Looks very solid.');
  }

  return {
    score,
    detectedSkills,
    suggestions
  };
};
