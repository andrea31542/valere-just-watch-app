'use client';
import { ChangeEvent, ReactNode, useEffect, useRef, useState } from 'react';
import Tooltip from './Tooltip';

type TwoValueRangeSliderProps = {
  min: number;
  max: number;
  sign?: ReactNode;
  step: number;
  defaultValue: { min: number; max: number };
  onChange: (type: 'min' | 'max', value: number) => void;
};

const TwoValueRangeSlider = ({
  min,
  max,
  step,
  sign,
  defaultValue,
  onChange,
}: TwoValueRangeSliderProps) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const rangeMinRef = useRef<HTMLInputElement | null>(null);
  const rangeMaxRef = useRef<HTMLInputElement | null>(null);
  const [sliderState, setSliderState] = useState({
    minValue: defaultValue.min ?? min,
    maxValue: defaultValue.max ?? max,
    tooltipMinOffset: 0,
    tooltipMaxOffset: 0,
    mouseActiveMin: false,
    mouseActiveMax: false,
  });

  useEffect(() => {
    setSliderState((prevState) => ({
      ...prevState,
      minValue: defaultValue.min ?? min,
      maxValue: defaultValue.max ?? max,
    }));
  }, [defaultValue]);

  const handleMouseUp = () => {
    onChange('min', sliderState.minValue);
    onChange('max', sliderState.maxValue);
    setSliderState((prevState) => ({
      ...prevState,
      mouseActiveMin: false,
      mouseActiveMax: false,
    }));
  };

  const handleMin = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = +e.target.value;
    if (newValue <= sliderState.maxValue) {
      setSliderState((prev) => ({
        ...prev,
        minValue: newValue,
      }));
      updateTooltipOffset(newValue, 'min');
    }
  };

  const handleMax = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = +e.target.value;
    if (newValue >= sliderState.minValue) {
      setSliderState((prev) => ({
        ...prev,
        maxValue: newValue,
      }));
      updateTooltipOffset(newValue, 'max');
    }
  };

  const updateTooltipOffset = (value: number, type: 'min' | 'max') => {
    const rangeRef = type === 'min' ? rangeMinRef : rangeMaxRef;
    if (rangeRef.current) {
      const rangeWidth = rangeRef.current.clientWidth;
      const offset = (rangeWidth * (value - min)) / (max - min);
      setSliderState((prev) => ({
        ...prev,
        [`tooltip${type.charAt(0).toUpperCase() + type.slice(1)}Offset`]:
          offset,
      }));
    }
  };

  useEffect(() => {
    if (progressRef.current) {
      const progress = progressRef.current;
      const leftPercent = ((sliderState.minValue - min) / (max - min)) * 100;
      const rightPercent =
        100 - ((sliderState.maxValue - min) / (max - min)) * 100;
      progress.style.left = `${leftPercent}%`;
      progress.style.right = `${rightPercent}%`;
    }
  }, [sliderState.minValue, sliderState.maxValue, min, max]);

  return (
    <div className='flex flex-row w-full items-center gap-[0.5rem] mt-1 item-baseline'>
      <span>{sign}</span>
      <span className='text-[var(--color-tertiary-contrast)]'>{min}</span>
      <div className='w-full'>
        <div className='slider relative h-1 rounded-md bg-[var(--color-tertiary-tint)]'>
          <div
            className='progress absolute h-1 rounded bg-[var(--color-gray-text)]'
            ref={progressRef}
          ></div>
        </div>
        <div className='range-input relative'>
          <div className='relative w-full'>
            <input
              min={min}
              max={max}
              step={step}
              type='range'
              value={sliderState.minValue}
              onChange={handleMin}
              onMouseDown={() =>
                setSliderState((prev) => ({ ...prev, mouseActiveMin: true }))
              }
              onMouseUp={handleMouseUp}
              ref={rangeMinRef}
              className='range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none cursor-grab'
            />
            <Tooltip
              value={sliderState.minValue}
              left={sliderState.tooltipMinOffset}
              show={sliderState.mouseActiveMin}
            />
          </div>
          <div className='relative w-full'>
            <input
              min={min}
              max={max}
              step={step}
              type='range'
              value={sliderState.maxValue}
              onChange={handleMax}
              onMouseDown={() =>
                setSliderState((prev) => ({ ...prev, mouseActiveMax: true }))
              }
              onMouseUp={handleMouseUp}
              ref={rangeMaxRef}
              className='range-max absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none cursor-grab'
            />
            <Tooltip
              value={sliderState.maxValue}
              left={sliderState.tooltipMaxOffset}
              show={sliderState.mouseActiveMax}
            />
          </div>
        </div>
      </div>
      <span className='text-[var(--color-tertiary-contrast)]'>{max}</span>
    </div>
  );
};

export default TwoValueRangeSlider;
