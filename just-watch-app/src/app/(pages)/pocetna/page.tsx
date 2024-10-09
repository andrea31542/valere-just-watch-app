import {
  getNPopularMoviesByGenre,
  getTheLatestMovies,
  getTopRatedMovies,
} from '@/app/api/api';
import MovieList from '@/app/components/MovieList.tsx/MovieList';
import { MovieResponseType } from '@/app/types/types';

interface PocetnaProps {
  latestMovies: any[]; // Define MovieType based on your movie data structure
}

const Pocetna = async () => {
  const latestMovies: MovieResponseType = await getTheLatestMovies();
  const topRatedMovies = await getTopRatedMovies();
  const comedyMovies = await getNPopularMoviesByGenre([35]);
  const anitmationMovies = await getNPopularMoviesByGenre([16]);

  return (
    <div className='flex flex-col px-[3.25rem] lg:px-[4.5rem] gap-[3rem]'>
      <MovieList title='Najnoviji filmovi' movieList={latestMovies.results} />
      <MovieList
        title='Top 3 filma'
        movieList={topRatedMovies.results.slice(0, 3)}
      />
      <MovieList title='Komedija' movieList={comedyMovies.results} />
      <MovieList title='Animirani' movieList={anitmationMovies.results} />
    </div>
  );
};

// export async function getServerSideProps() {
//   try {
//     const latestMovies = await getTheLatestMovies(); // Fetch the latest movies
//     return {
//       props: {
//         latestMovies, // Pass the fetched data as props to the component
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching latest movies:', error);
//     return {
//       props: {
//         latestMovies: [], // Pass an empty array or handle errors as needed
//       },
//     };
//   }
// }

export default Pocetna;
