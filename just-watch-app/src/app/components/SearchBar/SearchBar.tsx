'use client';
import icons from '@/app/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { getSearchData } from '@/app/api/api';
import { SearchResponseType } from '@/app/types/types';
import SearchSuggester from './SearchSuggester';

type SearchBarType = {
  placeholder: string;
};

const SearchBar = ({ placeholder = '' }: SearchBarType) => {
  const [value, setValue] = useState<string>('');
  const [searchData, setSearchData] = useState<SearchResponseType | undefined>(
    undefined
  );
  const fetchData = useCallback(
    debounce(async (value) => {
      const data = await getSearchData(value);
      setSearchData(data);
    }, 300),
    []
  );

  useEffect(() => {
    if (value) {
      fetchData(value);
    }
    return () => fetchData.cancel();
  }, [value, fetchData]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div className='relative flex-grow'>
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
      {value && searchData?.results.length && (
        <div className='absolute left-0 top-full w-full z-20'>
          <SearchSuggester items={searchData.results} />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
