'use client';

import icons from '@/app/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode, useState } from 'react';
import IconButton from '../IconButton';
import { FilterTypes } from '@/app/types/types';

type FilterProps = {
  label?: string;
  content: ReactNode;
};

const Filter = ({ label = 'Godina izdavanja', content }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative whitespace-nowrap border border-transparent rounded bg-transparent transition-colors duration-100 linear flex items-center'>
      <button
        className='block font-normal text-[15px] p-[5px_10px] text-[var(--color-light-shade)] overflow-hidden text-ellipsis cursor-pointer '
        onClick={() => toggleDropdown()}
      >
        {label}
        <FontAwesomeIcon
          className={`px-[0.25rem] ${isOpen ? 'rotate-180' : ''}`}
          icon={icons.chevronDown}
        />
      </button>

      {isOpen && (
        <div className='absolute flex flex-col overflow-auto z-20 bg-[var(--background-color)] w-[25rem] rounded-[0.5rem] p-[1.5rem] gap-[2rem] mt-[0.5rem] shadow-lg top-full'>
          <div className='flex flex-row items-baseline justify-between'>
            <h2 className='text-md md:text-xl text-[#d5d5d5]'>{label}</h2>
            <span className='bg-transparent text-[var(--color-secondary)] flex flex-row px-[1.5rem] py-[0.75rem] items-baseline'>
              <IconButton icon={icons.close} />
              RESET
            </span>
          </div>
          {content}
        </div>
      )}
    </div>
  );
};

export default Filter;
