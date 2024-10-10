'use client';
import { ReactNode, useRef } from 'react';
import IconButton from '../IconButton';
import icons from '@/app/icons';

const HorizontalContainer = ({ children }: { children: ReactNode }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='flex flex-col gap-4 relative'>
      <div className='relative flex items-center'>
        <IconButton
          onClick={() => scroll('left')}
          className='h-full absolute left-0 z-10 bg-[#060d17] bg-opacity-60  p-2'
          icon={icons.chevronLeft}
        />
        <div
          ref={scrollContainerRef}
          className='flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth'
        >
          {children}
        </div>
        <IconButton
          onClick={() => scroll('right')}
          className='absolute right-0 z-10  bg-[#060d17] bg-opacity-60 p-2 h-full flex items-center justify-center'
          icon={icons.chevronRight}
        />
      </div>
    </div>
  );
};

export default HorizontalContainer;
