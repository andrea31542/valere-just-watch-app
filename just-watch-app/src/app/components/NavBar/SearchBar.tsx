'use client';
import icons from '@/app/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, useState } from 'react';
import '../../styles/variables.css';

type SearchBarType = {
  placeholder: string;
  searchaValue?: string;
};

const SearchBar = ({
  placeholder = '',
  searchaValue = 'sda',
}: SearchBarType) => {
  const [value, setValue] = useState<string>(searchaValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div
      className='flex flex-grow-0 w-[28rem] transition-[width] duration-[0.6s] delay-[0.1s] items-center text-left w-full p-0 h-[2.25rem] z-10 
    bg-[var(--color-tertiary-shade)] rounded-[0.5rem]'
    >
      <span className='flex items-center pl-[1rem]'>
        <FontAwesomeIcon className='text-gray-500' icon={icons.search} />
      </span>
      <input
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className='bg-transparent border-none w-full  outline-none text-[var(--color-tertiary-contrast)] p-[0.25rem]'
      />
      {value.length > 0 && (
        <button>
          <FontAwesomeIcon
            className='flex items-center pr-[1rem]'
            icon={icons.close}
          />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
