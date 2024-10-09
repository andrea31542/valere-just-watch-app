'use client';
import { Movie } from '@/app/types/types';
import HorizontalContainer from './HorizontalScrollContainer';
import MovieCard from './MovieCard';

type MovieListProps = {
  title: string;
  movieList: Movie[];
};

const MovieList = ({ title, movieList }: MovieListProps) => {
  return (
    <div>
      <h2 className='text-[var(--color-secondary-contrast)] text-2xl mb-[1rem]'>
        {title}
      </h2>
      <HorizontalContainer>
        {movieList.map((movie) => (
          <MovieCard
            key={movie.id}
            className='flex-shrink-0'
            path={movie.poster_path}
            alt={movie.title}
            id={movie.id}
          />
        ))}
      </HorizontalContainer>
    </div>
  );
};

export default MovieList;
