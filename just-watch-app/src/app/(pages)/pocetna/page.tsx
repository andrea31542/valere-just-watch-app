import {
  getNPopularMoviesByGenre,
  getTheLatestMovies,
  getTopRatedMovies,
} from '@/app/api/api';
import MovieList from '@/app/components/MovieList.tsx/MovieList';
import { MovieResponseType } from '@/app/types/types';

const Pocetna = async () => {
  const latestMovies: MovieResponseType = await getTheLatestMovies();
  const topRatedMovies = await getTopRatedMovies();
  const comedyMovies = await getNPopularMoviesByGenre([35]);
  const animationMovies = await getNPopularMoviesByGenre([16]);
  const familyMovies = await getNPopularMoviesByGenre([10751]);
  const documentaryMovie = await getNPopularMoviesByGenre([99]);

  return (
    <div className='flex flex-col px-[3.25rem] lg:px-[4.5rem] gap-[3rem]'>
      <MovieList title='Najnoviji filmovi' movieList={latestMovies.results} />
      <MovieList
        title='Top 3 filma'
        movieList={topRatedMovies.results.slice(0, 3)}
      />
      <MovieList title='Komedija' movieList={comedyMovies.results} />
      <MovieList title='Animirani' movieList={animationMovies.results} />
      <MovieList title='Documentary' movieList={documentaryMovie.results} />
      <MovieList title='Family' movieList={familyMovies.results} />
    </div>
  );
};

export default Pocetna;
