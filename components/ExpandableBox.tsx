// components/ExpandableBox.tsx
"use client"
// components/ExpandableBox.tsx
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
    <div className="mb-4">
      <div className={`rounded bg-blue-700 overflow-hidden mb-2 ${expanded ? 'h-auto' : 'h-16'}`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold text-white">{title}</h2>
            <button
              className="text-white hover:text-blue-700 focus:outline-none"
              onClick={toggleExpand}
            >
              {expanded ? '-' : '+'}
            </button>
          </div>
          <p className={`text-white ${expanded ? 'block' : 'hidden'}`}>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpandableBox;




