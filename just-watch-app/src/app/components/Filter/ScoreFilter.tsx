'use client';
import OneValueRangeSlider from '../RangeSlider/OneValueRangeSlider';
import Image from 'next/image';
import { useFilter } from '@/app/context/FilterContext';
const ScoreFilter = () => {
  const { updateFilter } = useFilter();

  const handleUpdateScoreFilter = (newScore: number) => {
    updateFilter('score', newScore);
  };

  return (
    <OneValueRangeSlider
      min={0}
      max={10}
      step={0.1}
      onChange={handleUpdateScoreFilter}
      sign={
        <Image
          src='/imdb-logo.jpg'
          alt='imdb-logo'
          width={40}
          height={40}
          className='rounded-sm'
        />
      }
    />
  );
};

export default ScoreFilter;
