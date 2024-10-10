import classNames from 'classnames';
import React from 'react';

type TooltipProps = {
  value: number;
  left: number;
  show: boolean;
};

const Tooltip = ({ value, left, show }: TooltipProps) => {
  return (
    <div
      className={classNames(
        'absolute z-10 p-2 bottom-[3.5rem] text-white bg-black rounded',
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
