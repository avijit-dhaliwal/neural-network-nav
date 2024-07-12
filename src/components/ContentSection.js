import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ContentSection = ({ data, defaultSection }) => {
  const { sectionId } = useParams();
  const section = data.nodes.find(node => node.id === (sectionId || defaultSection));

  if (!section) {
    return <div>Section not found</div>;
  }

  return (
    <div className="content-section">
      <h2>{section.label}</h2>
      <p>{section.content}</p>
      {section.id !== 'home' && <Link to="/">Back to Home</Link>}
    </div>
  );
};

export default ContentSection;