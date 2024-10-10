import { formatToDecimal, formatLargeNumber } from '@/app/utils';
import Image from 'next/image';

type MovieScoreProps = {
  vote_average?: number;
  vote_count?: number;
};

const MovieScore = ({ vote_average, vote_count }: MovieScoreProps) => {
  return (
    <div className='flex gap-[0.5rem]'>
      <div className='flex items-center'>
        <Image
          src='/imdb-logo.jpg'
          alt='imdb-logo'
          width={30}
          height={30}
          className='rounded-sm'
        />
      </div>
      <span className='text-[var(--color-IMDB-score)]'>
        {vote_average && formatToDecimal(vote_average)}
        {vote_count && ` (${formatLargeNumber(vote_count)})`}
      </span>
    </div>
  );
};

export default MovieScore;
