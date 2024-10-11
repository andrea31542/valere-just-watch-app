import {
  getAllGenres,
  getNPopularMoviesByGenre,
  getTheLatestMovies,
  getTopRatedMovies,
} from '@/app/api/api';
import MovieList from '@/app/components/MovieList.tsx/MovieList';
import { MovieResponseType } from '@/app/types/types';
import { getRandomElements } from '@/app/utils';

const Pocetna = async () => {
  const genres = await getAllGenres();
  const random = getRandomElements(genres, 7);
  const latestMovies: MovieResponseType = await getTheLatestMovies();
  const topRatedMovies = await getTopRatedMovies();

  const moviePromises = random.map(async (genre) => {
    const movies = await getNPopularMoviesByGenre([genre.id]);
    return { title: genre.name, results: movies.results };
  });
  const movieLists = await Promise.all(moviePromises);

  return (
    <div className='flex flex-col px-[1rem] sm:px-[3rem] lg:px-[4.5rem] gap-[3rem]'>
      <MovieList title='Najnoviji filmovi' movieList={latestMovies.results} />
      <MovieList
        title='Top 3 filma'
        movieList={topRatedMovies.results.slice(0, 3)}
      />
      {movieLists.map((movieList, index) => (
        <MovieList
          key={index}
          title={movieList.title}
          movieList={movieList.results}
        />
      ))}
    </div>
  );
};
export default Pocetna;
