'use client';
import Image from 'next/image';
import IconButton from '../IconButton';
import icons from '@/app/icons';
import classNames from 'classnames';
import { useStore } from '@/app/store/store';
import { useState } from 'react';
import Link from 'next/link';
import { formatPathMovieTitle } from '@/app/utils';

type MovieCardProps = {
  path?: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
  id: number;
};

const MovieCard = ({
  path,
  alt = '',
  className,
  onClick,
  id,
}: MovieCardProps) => {
  const { favourites, setFavourites, removeFavourites } = useStore();
  const [isFavourite, setIsFavourite] = useState(
    favourites.some((fId) => fId === id)
  );

  const handleFavouriteMovie = () => {
    isFavourite ? removeFavourites(id) : setFavourites(id);
    setIsFavourite(!isFavourite);
  };
  return (
    <div
      className={classNames(
        'relative w-[190px] h-[270px] min-w[190px]',
        className
      )}
    >
      <Link href={`/film/${id}`} as={`/film/${formatPathMovieTitle(alt)}`}>
        <IconButton
          onClick={handleFavouriteMovie}
          icon={icons.favourite}
          className={`absolute text-4xl right-2 text-white ${
            isFavourite ? 'text-opacity-90' : 'text-opacity-30'
          } 
        hover:text-opacity-60`}
        />
        <Image
          className={classNames(
            className,
            'rounded-[0.25rem] w-full h-[270px]'
          )}
          src={`https://image.tmdb.org/t/p/original/${path}`}
          alt={alt}
          width={190}
          height={270}
          onClick={onClick}
        />
      </Link>
    </div>
  );
};

export default MovieCard;
