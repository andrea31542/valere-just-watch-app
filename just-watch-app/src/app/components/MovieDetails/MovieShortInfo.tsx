import { useStore } from '@/app/store/store';
import MovieCard from '../MovieList.tsx/MovieCard';
import ShortCard from './ShortCard';
import { convertMintesToHoursAndMinutes } from '@/app/utils';
import MovieScore from '../MovieScore';

const MovieShortInfo = () => {
  const { movieDetails } = useStore();
  const {
    poster_path,
    title,
    id,
    production_countries,
    runtime,
    genres,
    vote_average,
    vote_count,
  } = movieDetails;

  return (
    <div className='flex  justify-between gap-[2rem]'>
      <div className='flex flex-col gap-[1rem] flex-grow'>
        <ShortCard
          title='Žanrovi'
          content={genres?.map((genre) => genre.name).join(', ')}
        />
        <hr className='border-t  border-gray-300 my-2' />
        <ShortCard
          title='Trajanje'
          content={runtime && convertMintesToHoursAndMinutes(runtime)}
        />
        <hr className='border-t  border-gray-300 my-2' />
        <ShortCard
          title='Ocjena'
          content={
            <MovieScore vote_average={vote_average} vote_count={vote_count} />
          }
        />
        <hr className='border-t  border-gray-300 my-2' />
        <ShortCard
          title='Zemlja proizvodnje'
          content={production_countries
            ?.map((country) => country.name)
            .join(', ')}
        />
      </div>
      {poster_path && <MovieCard id={id ?? 0} path={poster_path} alt={title} />}
    </div>
  );
};

export default MovieShortInfo;
