'use client';
import { useState, useRef, useEffect, ReactNode } from 'react';
import Tooltip from '../Slider/Tooltip';

type OneValueRangeSliderProps = {
  min: number;
  max: number;
  sign?: ReactNode;
  onChange?: (value: number) => void;
};

const OneValueRangeSlider = ({
  min,
  max,
  sign,
  onChange,
}: OneValueRangeSliderProps) => {
  const [value, setValue] = useState(min);
  const rangeInputRef = useRef<HTMLInputElement | null>(null);
  const [tooltipOffset, setTooltipOffset] = useState(0);
  const [mouseActive, setMouseActive] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    updateTooltipOffset(newValue);
  };

  const updateTooltipOffset = (value: number) => {
    if (rangeInputRef.current) {
      const rangeWidth = rangeInputRef.current.clientWidth;
      const offset = (rangeWidth * (value - min)) / (max - min);
      setTooltipOffset(offset);
    }
  };

  useEffect(() => {
    updateTooltipOffset(value);
  }, [value]);

  const handleOnMouseDown = () => {
    setMouseActive(true);
  };
  const handleOnMouseUp = () => {
    setMouseActive(false);
    onChange?.(value);
  };

  return (
    <div className='flex flex-row w-full items-center gap-[0.5rem]'>
      <span>{sign}</span>
      <span className='text-[var(--color-tertiary-contrast)]'>{min}</span>
      <div className='p-[0.5rem] relative w-full'>
        <input
          type='range'
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          onMouseDown={handleOnMouseDown}
          onMouseUp={handleOnMouseUp}
          ref={rangeInputRef}
          className='w-full h-1'
        />
        <Tooltip value={value} left={tooltipOffset} show={mouseActive} />
      </div>
      <span className='text-[var(--color-tertiary-contrast)]'>{max}</span>
    </div>
  );
};

export default OneValueRangeSlider;
