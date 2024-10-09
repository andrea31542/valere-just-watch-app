'use client';
import { useFilter } from '@/app/context/FilterContext';
import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  useCallback,
} from 'react';

interface SliderProps {
  min: number;
  max: number;
  step: number;
}

const Slider = ({ min, max, step }: SliderProps) => {
  const { filters, updateFilter } = useFilter();
  const progressRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<{ min: number; max: number }>({
    min: filters.minYear,
    max: filters.maxYear,
  });
  const [showTooltip, setShowTooltip] = useState({ min: false, max: false });

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    if (newValue <= value.max) {
      setValue((prevState) => ({ ...prevState, min: newValue }));
    }
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    if (newValue >= value.min) {
      setValue((prevState) => ({ ...prevState, max: newValue }));
    }
  };

  const handleMouseDownMin = () => {
    setShowTooltip((prevState) => ({ ...prevState, min: true }));
  };

  const handleMouseUpMin = () => {
    setShowTooltip((prevState) => ({ ...prevState, min: false }));
    updateFilter('minYear', value.min);
  };

  const handleMouseDownMax = () => {
    setShowTooltip((prevState) => ({ ...prevState, max: true }));
  };

  const handleMouseUpMax = () => {
    setShowTooltip((prevState) => ({ ...prevState, max: false }));
    updateFilter('maxYear', value.max);
  };

  const handleResetButton = useCallback(() => {
    setValue({ min: min, max: max });
    // setFilters((prevState) => ({
    //   ...prevState,
    //   releaseYearFrom: min,
    //   releaseYearUntil: max,
    // }));
  }, [min, max]);

  useEffect(() => {
    if (progressRef.current) {
      const progressBar = progressRef.current;
      const range = max - min;
      const minPercent = ((value.min - min) / range) * 100;
      const maxPercent = ((max - value.max) / range) * 100;
      progressBar.style.left = `${minPercent}%`;
      progressBar.style.right = `${maxPercent}%`;
    }
  }, [value, min, max]);

  const getTooltipOffset = (value: number) => {
    const rangeInput = document.querySelectorAll(
      'input[type="range"]'
    )[0] as HTMLInputElement;
    const offset = (rangeInput.clientWidth * (value - min)) / (max - min);
    return offset;
  };

  return (
    <div className='flex justify-center items-center gap-2 text-xs text-[#d5d5d5]'>
      <span>{min}</span>
      <div className='flex flex-col w-full'>
        <div className='relative h-1 rounded-md bg-[#1e2328]'>
          <div
            className='absolute h-1 bg-[#4c5a67] rounded'
            ref={progressRef}
          ></div>
        </div>
        <div className='relative'>
          <>
            <input
              onChange={handleMinChange}
              onMouseDown={handleMouseDownMin}
              onMouseUp={handleMouseUpMin}
              onTouchStart={handleMouseDownMin}
              onTouchEnd={handleMouseUpMin}
              type='range'
              min={min}
              step={step}
              max={max}
              value={value.min}
              className='absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-auto cursor-grab'
            />
            {showTooltip.min && (
              <div
                className='absolute -top-8 left-0 transform -translate-x-1/2 bg-[#4c5a67] text-white text-center rounded px-1'
                style={{ left: `${getTooltipOffset(value.min)}px` }}
              >
                {value.min}
              </div>
            )}
          </>
          <>
            <input
              onChange={handleMaxChange}
              onMouseDown={handleMouseDownMax}
              onMouseUp={handleMouseUpMax}
              onTouchStart={handleMouseDownMax}
              onTouchEnd={handleMouseUpMax}
              type='range'
              min={min}
              step={step}
              max={max}
              value={value.max}
              className='absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-auto cursor-grab'
            />
            {showTooltip.max && (
              <div
                className='absolute -top-8 transform -translate-x-1/2 bg-[#4c5a67] text-white text-center rounded px-1'
                style={{ left: `${getTooltipOffset(value.max)}px` }}
              >
                {value.max}
              </div>
            )}
          </>
        </div>
      </div>
      <span>{max}</span>
    </div>
  );
};

export default Slider;
