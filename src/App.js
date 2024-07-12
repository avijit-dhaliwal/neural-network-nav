import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NetworkGraph from './components/NetworkGraph';
import ContentSection from './components/ContentSection';
import { siteData } from './data/siteData';
import { Analytics } from '@vercel/analytics/react';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NetworkGraph data={siteData} />
        <Routes>
          <Route path="/" element={<ContentSection data={siteData} defaultSection="home" />} />
          <Route path="/:sectionId" element={<ContentSection data={siteData} />} />
        </Routes>
      </div>
      <Analytics />
    </Router>
  );
}

export default App;