'use client';
import { useEffect, useState } from 'react';
import { useStore } from '@/app/store/store';
import { getMovieDetails } from '@/app/api/api';
import BannerImage from '@/app/components/BannerImage';
import MovieDetailsContent from '@/app/components/MovieDetails/MovieDetailsContent';

const MovieDetails = () => {
  const { movieDetailsId, movieDetails, setMovieDetails, language } =
    useStore();
  const [loading, setLoading] = useState(true);
  const { title, backdrop_path, original_title } = movieDetails;
  useEffect(() => {
    (async () => {
      if (movieDetailsId) {
        try {
          const movieDetails = await getMovieDetails(movieDetailsId);
          setMovieDetails(movieDetails);
          console.log('mo', movieDetails);
        } catch (error) {
          console.error('Error fetching movie details:', error);
        } finally {
          setLoading(false);
        }
      }
    })();
  }, [movieDetailsId, language]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movieDetails) {
    return <div>Movie not found.</div>;
  }

  return (
    <div className='relative'>
      <BannerImage
        alt={title}
        backdropPath={backdrop_path}
        title={title}
        originalTitle={original_title}
      />
      <MovieDetailsContent />
    </div>
  );
};

export default MovieDetails;
