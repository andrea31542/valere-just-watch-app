'use client';
import MovieCard from '@/app/components/MovieList.tsx/MovieCard';
import { useStore } from '@/app/store/store';

const Omiljeni = () => {
  const { favourites } = useStore();

  return (
    <div className='flex flex-col gap-[1rem] px-[1rem] lg:px-[4rem]'>
      <h2 className='text-md md:text-xl text-[#d5d5d5]'>Omiljeni filmovi </h2>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-4 scrollbar-hide'>
        {favourites.map((favourite) => (
          <MovieCard
            key={favourite.id}
            className='w-auto h-auto'
            {...favourite}
          />
        ))}
      </div>
    </div>
  );
};

export default Omiljeni;
