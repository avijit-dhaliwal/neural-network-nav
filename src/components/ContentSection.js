import React from 'react';
import { useParams } from 'react-router-dom';

const ContentSection = ({ data }) => {
  const { sectionId } = useParams();
  const section = data.nodes.find(node => node.id === sectionId);

  if (!section) {
    return <div>Section not found</div>;
  }

  return (
    <div className="content-section">
      <h2>{section.label}</h2>
      <p>{section.content}</p>
    </div>
  );
};

export default ContentSection;