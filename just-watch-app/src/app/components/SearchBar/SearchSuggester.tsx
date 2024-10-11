'use client';

import { SeachMovieType } from '@/app/types/types';
import SearchItemCard from './SearchItemCard';
import { imageApiRoot } from '@/app/constanst';
import { formatPathMovieTitle, getYearFromString } from '@/app/utils';
import { useRouter } from 'next/navigation';
import { useStore } from '@/app/store/store';
import { useEffect, useState } from 'react';

type SearchSuggesterProps = {
  items: SeachMovieType[];
  query: string;
};

const renderTitle = (title: string) => {
  return (
    <div className='text-[#b9bdcc] text-sm font-bold h-[15px] tracking-[1.36px] leading-[17px] uppercase min-h-[45px] flex items-center pl-4'>
      {title}
    </div>
  );
};

const SearchSuggester = ({ items, query }: SearchSuggesterProps) => {
  const router = useRouter();
  const { setMovieDetailsId } = useStore();
  const [focusedMovie, setFocusedMovie] = useState<number | null>(null);
  const movies = items.filter((item) => item.media_type === 'movie');
  const people = items.filter((item) => item.media_type === 'person');

  const displayedMovies = movies.slice(0, 5);
  const displayedPeople = people.slice(0, 5);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        setFocusedMovie((prevIndex) => {
          if (prevIndex === null) {
            return 0;
          } else if (prevIndex >= displayedMovies.length - 1) {
            if (prevIndex === null || prevIndex <= 0) {
              return null;
            } else {
              return prevIndex - 1;
            }
          } else {
            return prevIndex + 1;
          }
        });
      } else if (event.key === 'ArrowUp') {
        setFocusedMovie((prevIndex) => {
          if (prevIndex === null || prevIndex <= 0) {
            return null;
          } else {
            return prevIndex - 1;
          }
        });
      } else if (event.key === 'Enter') {
        if (focusedMovie === null) {
          console.log(query);
          router.push(`/search?q=${query}`);
        } else {
          const selectedMovie = focusedMovie && displayedMovies[focusedMovie];
          if (selectedMovie) {
            const { id, original_title, title, name, original_name } =
              selectedMovie;
            const displayTitle =
              original_title || title || name || original_name;
            setMovieDetailsId(id);
            router.push(`/film/${formatPathMovieTitle(displayTitle ?? '')}`);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [focusedMovie, displayedMovies, setMovieDetailsId, router]);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-[var(--color-tertiary-shade)] shadow-lg px-[1rem]'>
      <div className='flex flex-col'>
        {renderTitle('Filmovi & serije')}
        <hr className='border-t border-[#383d47] mb-2.5 ml-4 -mt-0.25' />
        <div className='flex flex-col outline-none'>
          {displayedMovies.map((item, index) => {
            const {
              id,
              title,
              poster_path,
              release_date,
              media_type,
              original_title,
              name,
              original_name,
            } = item;
            const displayTitle =
              original_title || title || original_name || name;
            const handleMovieClick = () => {
              setMovieDetailsId(id);
              router.push(`/film/${formatPathMovieTitle(displayTitle)}`);
            };

            return (
              <SearchItemCard
                imageType='square'
                subtitle={
                  release_date
                    ? `Release: ${getYearFromString(release_date)}`
                    : `Type: ${media_type}`
                }
                title={displayTitle}
                imagePath={`${imageApiRoot}${poster_path}`}
                key={id}
                onClick={handleMovieClick}
                isFocused={focusedMovie === index}
              />
            );
          })}
        </div>
      </div>

      <div className='flex flex-col'>
        {renderTitle('Ljudi')}
        <hr className='border-t border-[#383d47] mb-2.5 ml-4 -mt-0.25' />
        <div className='flex flex-col'>
          {displayedPeople.map((item) => {
            const {
              id,
              original_name,
              known_for_department,
              profile_path,
              name,
            } = item;

            return (
              <SearchItemCard
                imageType='circle'
                subtitle={`Department: ${known_for_department}`}
                title={original_name || name}
                imagePath={`${imageApiRoot}${profile_path}`}
                key={id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchSuggester;
