import classNames from 'classnames';
import React from 'react';

type TooltipProps = {
  value: number;
  left: number;
  show: boolean;
};

const Tooltip = ({ value, left, show }: TooltipProps) => {
  if (!show) return null;
  return (
    <div
      className={classNames(
        'absolute z-20 p-2 bottom-[1rem] text-white bg-black rounded',
        show ? 'block' : 'hidden'
      )}
      style={{
        left: `${left}px`,
      }}
    >
      {value}
    </div>
  );
};

export default Tooltip;
