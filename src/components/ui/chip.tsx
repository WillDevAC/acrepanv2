import React, { useState } from 'react';

interface ChipProps {
  label: string;
}

const Chip: React.FC<ChipProps> = ({ label }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div
      className={`cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md ${
        selected ? 'bg-primary text-white' : 'bg-white text-gray-700'
      }`}
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

export default Chip;
