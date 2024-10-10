'use client';
import { useFilter } from '@/app/context/FilterContext';
import IconButton from '../IconButton';
import icons from '@/app/icons';
import useGetGenres from '@/app/hooks/useGetGenres';
import { Genre } from '@/app/types/types';

const GenreSelect = () => {
  const { filters, updateFilter } = useFilter();
  const { allGenres } = useGetGenres();

  const handleGenreState = (genreId: number) => {
    const { withoutGenres, selectedGenres } = filters;
    if (selectedGenres.includes(genreId)) {
      updateFilter(
        'selectedGenres',
        selectedGenres.filter((id) => id !== genreId)
      );
      updateFilter('withoutGenres', [...withoutGenres, genreId]);
    } else if (withoutGenres.includes(genreId)) {
      updateFilter(
        'withoutGenres',
        withoutGenres.filter((id) => id !== genreId)
      );
    } else updateFilter('selectedGenres', [...selectedGenres, genreId]);
  };

  const getGenreState = (genreId: number) => {
    const { selectedGenres, withoutGenres } = filters;

    if (selectedGenres.includes(genreId)) {
      return 'selected';
    } else if (withoutGenres.includes(genreId)) {
      return 'without';
    } else {
      return 'neutral';
    }
  };

  return (
    <div>
      <ul className='list-none grid grid-cols-2 gap-1'>
        {allGenres.map((genre: Genre) => (
          <li
            key={genre.id}
            onClick={() => handleGenreState(genre.id)}
            className='flex text-[var(--color-light-shade)] items-center cursor-pointer'
          >
            {getGenreState(genre.id) === 'selected' && (
              <IconButton
                icon={icons.checkmark}
                className='text-[var(--color-secondary-contrast)] px-[0.25rem]'
              />
            )}
            {getGenreState(genre.id) === 'without' && (
              <IconButton
                icon={icons.minusCircle}
                className='text-[var(--color-secondary-contrast)]'
              />
            )}
            {getGenreState(genre.id) === 'neutral' && (
              <IconButton
                icon={icons.checkmark}
                className='text-[var(--color-light-shade)]'
              />
            )}
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreSelect;
