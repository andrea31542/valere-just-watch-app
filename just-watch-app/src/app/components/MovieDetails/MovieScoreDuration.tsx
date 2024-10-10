'use client';

import { useStore } from '@/app/store/store';
import { convertMintesToHoursAndMinutes } from '@/app/utils';
import MovieScore from '../MovieScore';

const MovieScoreDuration = () => {
  const { movieDetails } = useStore();
  const { runtime, vote_average, vote_count } = movieDetails;
  return (
    <div className='flex gap-[0.5rem]'>
      <MovieScore vote_average={vote_average} vote_count={vote_count} />
      <div className='flex relative items-center text-[#d5d5d5]'>
        {runtime && convertMintesToHoursAndMinutes(runtime)}
      </div>
    </div>
  );
};

export default MovieScoreDuration;
