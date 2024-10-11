'use client';

import { useFilter } from '../context/FilterContext';
import icons from '../icons';
import IconButton from './IconButton';

const ResetFilterButton = () => {
  const { resetAllFilters } = useFilter();
  return (
    <span
      className='bg-transparent text-[var(--color-secondary)] flex flex-row px-[1.5rem] py-[0.75rem] items-baseline cursor-pointer'
      onClick={resetAllFilters}
    >
      <IconButton icon={icons.close} />
      RESET
    </span>
  );
};
export default ResetFilterButton;
