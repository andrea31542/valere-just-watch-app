'use client';

import { Movie } from '@/app/types/types';
import { useCallback, useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import MovieCard from '../MovieList.tsx/MovieCard';
import { getFilteredPopularMovies } from '@/app/api/api';
import { FilterContext } from '@/app/context/FilterContext';

const InfiniteScroll = () => {
  const { filters } = useContext(FilterContext);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const scrollRef = useRef<IntersectionObserver | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  const fetchMovies = useCallback(
    async (page: number) => {
      if (isFetching) return;
      setIsFetching(true);
      const params = {
        page: page,
        with_genres: filters.selectedGenres,
        without_genres: filters.withoutGenres,
      };
      const data = await getFilteredPopularMovies(params);
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      setHasMore(data.page < data.total_pages);
      setIsFetching(false);
    },
    [filters]
  );

  useEffect(() => {
    if (page === 1 || isFetching || !hasMore) return;
    fetchMovies(page);
  }, [page]);

  useEffect(() => {
    setMovies([]);
    setPage(1);
    fetchMovies(1);
  }, [fetchMovies]);

  const lastMovieRef = useCallback(
    (node: HTMLDivElement) => {
      if (scrollRef.current) {
        scrollRef.current.disconnect();
      }
      scrollRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && !isFetching) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) scrollRef.current.observe(node);
    },
    [hasMore]
  );

  return (
    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-4 scrollbar-hide'>
      {movies.map((movie, index) => (
        <div
          key={`${movie.id}-${index}`}
          className='relative'
          ref={index === movies.length - 1 ? lastMovieRef : null}
        >
          <MovieCard
            className='w-auto h-auto'
            alt={movie.title}
            path={movie.poster_path}
            key={`${movie.id}-${index}`}
            id={movie.id}
          />
        </div>
      ))}
    </div>
  );
};
export default InfiniteScroll;
