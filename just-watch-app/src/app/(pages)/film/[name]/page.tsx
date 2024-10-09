// import { getMovieDetails } from '@/app/api/api';
// import { Movie } from '@/app/types/types';
// import { GetServerSideProps } from 'next';
// // import { useRouter } from 'next/router';
// // import { useParams } from 'next/navigation';

// const MovieDetails = ({ movie }: { movie: Movie | null }) => {
//   // const router = useRouter();
//   // const { movieId } = router.query;

//   if (!movie) {
//     return <div>Movie not found.</div>;
//   }

//   return (
//     <div>
//       <h1>{movie.title}</h1>
//       <p>{movie.overview}</p>
//       <p>Release Date: {movie.release_date}</p>
//       <p>Rating: {movie.vote_average}</p>
//     </div>
//   );
// };

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // const router = useRouter();
//   // const par = useParams();
//   // const { moviename } = router.query;
//   const { movieId } = context.params as { movieId: string };

//   try {
//     const movie = await getMovieDetails(Number(movieId));
//     return {
//       props: {
//         movie,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching movie details:', error);
//     return {
//       props: {
//         movie: null,
//       },
//     };
//   }
// };

// export default MovieDetails;

import { getMovieDetails } from '@/app/api/api';
import { Movie } from '@/app/types/types';

interface MovieDetailsProps {
  params: {
    name: string; // or movieId based on your routing
  };
}

// Fetch the movie details based on the URL parameter
const MovieDetails = async ({ params }: MovieDetailsProps) => {
  const { name } = params; // Assuming you're using the name in the URL
  let movie: Movie | null = null;

  try {
    // Fetch movie details using the movie name or ID
    movie = await getMovieDetails(+name); // Adjust this based on your API requirements
  } catch (error) {
    console.error('Error fetching movie details:', error);
  }

  if (!movie) {
    return <div className='bg-red-300'>Movie not found. {name}</div>;
  }

  return (
    <div className='bg-red-300'>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};

export default MovieDetails;
