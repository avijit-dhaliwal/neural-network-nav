export const siteData = {
    nodes: [
      { id: 'home', label: 'Home', color: '#FF6B6B', content: 'Welcome to my neural network website!' },
      { id: 'projects', label: 'Projects', color: '#4ECDC4', content: 'Here are some of my coding projects...' },
      { id: 'skills', label: 'Skills', color: '#45B7D1', content: 'My technical skills include...' },
      { id: 'ai-ml', label: 'AI/ML', color: '#F7B267', content: 'My work in artificial intelligence and machine learning...' },
      { id: 'running', label: 'Running', color: '#6B48FF', content: 'My passion for running...' },
      { id: 'lifting', label: 'Lifting', color: '#96E072', content: 'My weightlifting journey...' },
      { id: 'reading', label: 'Reading', color: '#D7263D', content: 'Books I love and recommend...' },
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