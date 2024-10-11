'use client';

import { SeachMovieType } from '@/app/types/types';
import SearchItemCard from './SearchItemCard';
import { imageApiRoot } from '@/app/constanst';
import { formatPathMovieTitle, getYearFromString } from '@/app/utils';
import { useRouter } from 'next/navigation';
import { useStore } from '@/app/store/store';
type SearchSuggesterProps = {
  items: SeachMovieType[];
};

const renderTitle = (title: string) => {
  return (
    <div className='text-[#b9bdcc] text-sm font-bold h-[15px] tracking-[1.36px] leading-[17px] uppercase min-h-[45px] flex items-center pl-4'>
      {title}
    </div>
  );
};

const SearchSuggester = ({ items }: SearchSuggesterProps) => {
  const router = useRouter();
  const { setMovieDetailsId } = useStore();
  const movies = items.filter((item) => item.media_type === 'movie');
  const people = items.filter((item) => item.media_type === 'person');

  const displayedMovies = movies.slice(0, 5);
  const displayedPeople = people.slice(0, 5);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-[var(--color-tertiary-shade)] shadow-lg px-[1rem]'>
      <div className='flex flex-col'>
        {renderTitle('Filmovi & serije')}
        <hr className='border-t border-[#383d47] mb-2.5 ml-4 -mt-0.25' />
        <div className='flex flex-col'>
          {displayedMovies.map((item) => {
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
                subtitle={`Deparment: ${known_for_department}`}
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
