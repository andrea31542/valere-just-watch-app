import Image from 'next/image';
import MovieScoreDuration from './MovieDetails/MovieScoreDuration';
import { imageApiRoot } from '../constanst';

type BannerImageProps = {
  alt: string | undefined;
  backdropPath: string | undefined;
  title: string | undefined;
  originalTitle: string | undefined;
};

const BannerImage = ({
  alt = 'No alt',
  backdropPath,
  title,
  originalTitle,
}: BannerImageProps) => {
  return (
    <div className='relative w-full h-[33vh] md:h-[54vh] lg:h-[720px]'>
      <Image
        alt={alt}
        className='object-cover w-full h-full'
        src={`${imageApiRoot}${backdropPath}`}
        width={1920}
        height={720}
      />
      <div className='absolute inset-0 bg-gradient-to-r from-black to-transparent flex items-center'>
        <div className='flex flex-col w-[60%] md:w-[40%] p-[2rem] gap-[3rem]'>
          <h1 className='text-base md:text-3xl md:text-5xl font-bold text-white'>
            {title}
          </h1>
          <h3 className='original-title text-lg text-white'>
            Original Title: {originalTitle}
          </h3>
          <MovieScoreDuration />
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
