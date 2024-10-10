'use client';
import Image from 'next/image';
import IconButton from '../IconButton';
import icons from '@/app/icons';
import classNames from 'classnames';
import { useStore } from '@/app/store/store';
import { useState } from 'react';
import { formatPathMovieTitle } from '@/app/utils';
import { useRouter } from 'next/navigation';

type MovieCardProps = {
  path?: string;
  alt?: string;
  className?: string;
  id: number;
};

const MovieCard = ({ path = '', alt = '', className, id }: MovieCardProps) => {
  const { favourites, setFavourites, removeFavourites, setMovieDetailsId } =
    useStore();
  const router = useRouter();
  const [isFavourite, setIsFavourite] = useState(
    favourites.some((favouriteMovie) => favouriteMovie.id === id)
  );

  const handleFavouriteMovie = () => {
    isFavourite
      ? removeFavourites(id)
      : setFavourites({ alt: alt, id: id, path: path });
    setIsFavourite(!isFavourite);
  };

  const handleMovieClick = () => {
    setMovieDetailsId(id);
    router.push(`/film/${formatPathMovieTitle(alt)}`);
  };

  return (
    <div
      className={classNames(
        'relative w-[190px] h-[270px] min-w[190px]',
        className
      )}
    >
      <IconButton
        onClick={handleFavouriteMovie}
        icon={icons.favourite}
        className={`absolute text-4xl right-2 text-white ${
          isFavourite ? 'text-opacity-90' : 'text-opacity-30'
        } 
        hover:text-opacity-60`}
      />
      <Image
        onClick={handleMovieClick}
        className={classNames(
          className,
          'rounded-[0.25rem] w-full h-[270px] cursor-pointer'
        )}
        src={`https://image.tmdb.org/t/p/original/${path}`}
        alt={alt}
        width={190}
        height={270}
      />
    </div>
  );
};

export default MovieCard;
