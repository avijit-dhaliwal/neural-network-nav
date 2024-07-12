export const siteData = {
    nodes: [
      { id: 'home', label: 'Home', color: '#FF6B6B', content: 'Welcome to my neural network website! Click on any node to explore.' },
      { id: 'projects', label: 'Projects', color: '#4ECDC4', content: 'Here are some of my coding projects: Project A, Project B, Project C.' },
      { id: 'skills', label: 'Skills', color: '#45B7D1', content: 'My technical skills include: React, Node.js, Python, Machine Learning, and Data Analysis.' },
      { id: 'ai-ml', label: 'AI/ML', color: '#F7B267', content: 'My work in artificial intelligence and machine learning includes developing neural networks and implementing computer vision algorithms.' },
      { id: 'running', label: 'Running', color: '#6B48FF', content: "I'm an avid runner. I've completed 3 marathons and enjoy trail running on weekends." },
      { id: 'lifting', label: 'Lifting', color: '#96E072', content: 'Weightlifting is a key part of my fitness routine. I focus on powerlifting and Olympic lifts.' },
      { id: 'reading', label: 'Reading', color: '#D7263D', content: 'I love reading sci-fi and technical books. Some recommendations: "Dune", "The Pragmatic Programmer", and "Deep Learning" by Goodfellow et al.' },
    ],
    links: [
      { source: 'home', target: 'projects' },
      { source: 'home', target: 'skills' },
      { source: 'home', target: 'ai-ml' },
      { source: 'home', target: 'running' },
      { source: 'home', target: 'lifting' },
      { source: 'home', target: 'reading' },
      { source: 'projects', target: 'skills' },
      { source: 'projects', target: 'ai-ml' },
      { source: 'skills', target: 'ai-ml' },
      { source: 'running', target: 'lifting' },
    ]
  };