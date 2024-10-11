'use client';

import DescriptionContent from './DescriptionContent';
import { useStore } from '@/app/store/store';
import MovieShortInfo from './MovieShortInfo';
import ActorCard from '../CastCard/ActorCard';
import HorizontalContainer from '../MovieList.tsx/HorizontalScrollContainer';
import { useEffect, useMemo } from 'react';
import { getMovieCasting } from '@/app/api/api';

const MovieDetailsContent = () => {
  const { movieDetails, movieDetailsId, casting, setCasting } = useStore();
  const { overview } = movieDetails;

  useEffect(() => {
    (async () => {
      if (movieDetailsId) {
        const casting = await getMovieCasting(movieDetailsId);
        setCasting(casting);
      }
    })();
  }, [movieDetailsId]);

  const castList = useMemo(() => {
    return (
      casting?.cast.map((person) => (
        <ActorCard key={person.id} name={person.name} role={person.character} />
      )) ?? []
    );
  }, [casting]);

  const crewList = useMemo(() => {
    return (
      casting?.crew.map((person) => (
        <ActorCard key={person.id} name={person.name} role={person.job} />
      )) ?? []
    );
  }, [casting]);

  return (
    <div className='flex flex-col p-[1rem] lg:p-[4rem] gap-[1.5rem]'>
      <h1 className='text-4xl font-bold text-white uppercase'>O filmu</h1>
      <DescriptionContent title='Opis' content={overview} />
      <div className='relative bottom-0 left-0 right-0 p-4 text-white'>
        <MovieShortInfo />
      </div>
      <h3 className='uppercase text-xl text-[var(--color-gray-text)] font-bold'>
        cast
      </h3>
      <HorizontalContainer>{castList}</HorizontalContainer>
      <h3 className='uppercase text-xl text-[var(--color-gray-text)] font-bold'>
        crew
      </h3>
      <HorizontalContainer>{crewList}</HorizontalContainer>
    </div>
  );
};
export default MovieDetailsContent;
