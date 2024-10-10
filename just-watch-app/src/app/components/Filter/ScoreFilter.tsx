import OneValueRangeSlider from '../RangeSlider/OneValueRangeSlider';
import Image from 'next/image';
const ScoreFilter = () => {
  return (
    <OneValueRangeSlider
      min={0}
      max={10}
      sign={
        <Image
          src='/imdb-logo.jpg'
          alt='imdb-logo'
          width={40}
          height={40}
          className='rounded-sm'
        />
      }
    />
  );
};

export default ScoreFilter;
