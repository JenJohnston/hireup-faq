"use client";

import React from 'react';

interface ToggleButtonProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ isExpanded, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="bg-purple-400 text-white py-2 px-4 rounded-lg hover:bg-purple-500 transition text-sm sm:text-base md:text-lg lg:text-xl shadow-lg"
    >
      {isExpanded ? 'Collapse All' : 'Expand All'}
    </button>
  );
};

export default ToggleButton;
