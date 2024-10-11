import { getSearchData } from '@/app/api/api';
import MovieShortInfo from '@/app/components/MovieDetails/MovieShortInfo';

type SearchType = {
  searchParams: { q?: string };
};

const Search = async ({ searchParams }: SearchType) => {
  const query = searchParams.q || '';
  const initialData = await getSearchData(query);
  const moviesSearched = initialData.results;

  return (
    <div className='flex flex-col gap-[1rem] px-[0.5rem] md:px-[2rem]'>
      <h1 className='text-[var(--color-secondary-contrast)] text-3xl mt-[1rem]'>
        Search query: {query}
      </h1>
      {moviesSearched.map((movieDetails) => (
        <div className='px-[3rem]'>
          <MovieShortInfo
            poster_path={movieDetails.poster_path}
            title={movieDetails.title || movieDetails.original_title}
            id={movieDetails.id!}
            vote_average={movieDetails.vote_average}
            vote_count={movieDetails.vote_count}
          />
        </div>
      ))}
    </div>
  );
};

export default Search;
