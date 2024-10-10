import { formatToDecimal, formatLargeNumber } from '@/app/utils';
import classNames from 'classnames';
import Image from 'next/image';

type MovieScoreProps = {
  vote_average?: number;
  vote_count?: number;
  className?: string;
};

const MovieScore = ({
  vote_average,
  vote_count,
  className,
}: MovieScoreProps) => {
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
      <span className={classNames(className)}>
        {vote_average && formatToDecimal(vote_average)}
        {vote_count && ` (${formatLargeNumber(vote_count)})`}
      </span>
    </div>
  );
};

export default MovieScore;
