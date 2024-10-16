import MovieCard from '../MovieList.tsx/MovieCard';
import ShortCard from './ShortCard';
import { convertMintesToHoursAndMinutes } from '@/app/utils';
import MovieScore from '../MovieScore';
import { Genre, ProductionCountryType } from '@/app/types/types';

type MovieShortInfo = {
  poster_path?: string;
  title?: string;
  id: number;
  production_countries?: ProductionCountryType[];
  runtime?: number;
  genres?: Genre[];
  vote_average?: number;
  vote_count?: number;
};

const MovieShortInfo = ({
  poster_path,
  title,
  id,
  production_countries = [],
  runtime = 0,
  genres = [],
  vote_average,
  vote_count,
}: MovieShortInfo) => {
  return (
    <div className='flex flex-col justify-center items-center md:flex-row md:justify-between  gap-[2rem]'>
      <div className='flex flex-col gap-[1rem] flex-grow w-full md:w-auto'>
        {genres.length > 0 ? (
          <>
            <ShortCard
              title='Žanrovi'
              content={genres?.map((genre) => genre.name).join(', ')}
            />
            <hr className='border-t  border-gray-300 my-2' />
          </>
        ) : null}
        {runtime > 0 ? (
          <>
            <ShortCard
              title='Trajanje'
              content={runtime && convertMintesToHoursAndMinutes(runtime)}
            />
            <hr className='border-t  border-gray-300 my-2' />
          </>
        ) : null}
        {((vote_average && vote_average > 0) ||
          (vote_count && vote_count > 0)) && (
          <>
            <ShortCard
              title='Ocjena'
              content={
                <MovieScore
                  vote_average={vote_average}
                  vote_count={vote_count}
                />
              }
            />
            <hr className='border-t  border-gray-300 my-2' />
          </>
        )}
        {production_countries.length > 0 ? (
          <ShortCard
            title='Zemlja proizvodnje'
            content={production_countries
              ?.map((country) => country.name)
              .join(', ')}
          />
        ) : null}
      </div>
      {poster_path && <MovieCard id={id ?? 0} path={poster_path} alt={title} />}
    </div>
  );
};

export default MovieShortInfo;
