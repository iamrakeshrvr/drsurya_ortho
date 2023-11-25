// components/ExpandableBox.tsx
"use client"
// components/ExpandableBox.tsx
import React, { useState } from 'react';

interface ExpandableBoxProps {
  title: string;
  content: string;
}

const ExpandableBox: React.FC<ExpandableBoxProps> = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={` p-4 mb-4 transition-transform duration-500 transform ${expanded ? 'translate-y-0' : 'translate-y-[-10px]'}`}>
      <div className={`rounded bg-blue-700 p-4 mb-2`}>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold text-white">{title}</h2>
          <button
            className="text-white hover:text-blue-700 focus:outline-none"
            onClick={toggleExpand}
          >
            {expanded ? '-' : '+'}
          </button>
        </div>
        {expanded && <p className="text-white">{content}</p>}
      </div>
    </div>
  );
};

export default ExpandableBox;



