import React from 'react';

interface TooltipProps {
  value: number;
  left: string;
}

const Tooltip: React.FC<TooltipProps> = ({ value, left }) => {
  return (
    <div
      className='absolute p-1 bg-gray-700 text-white rounded'
      style={{ left, top: '-30px', transform: 'translateX(-50%)' }}
    >
      {value}
    </div>
  );
};

export default Tooltip;
