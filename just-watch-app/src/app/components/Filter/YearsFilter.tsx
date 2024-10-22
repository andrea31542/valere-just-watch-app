'use client';
import { useFilter } from '@/app/context/FilterContext';
import TwoValueRangeSlider from '../RangeSlider/TwoValueRangeSlider';
const YearsFilter = () => {
  const { updateFilter, filters } = useFilter();

  const handleUpdateYearsFilter = (type: 'min' | 'max', value: number) => {
    if (type === 'min') {
      updateFilter('minYear', value);
    } else updateFilter('maxYear', value);
  };

  return (
    <TwoValueRangeSlider
      step={1}
      min={1900}
      max={2024}
      defaultValue={{ min: filters.minYear, max: filters.maxYear }}
      onChange={handleUpdateYearsFilter}
    />
  );
};

export default YearsFilter;
