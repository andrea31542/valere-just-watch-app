'use client';
import { ReactNode, useEffect, useRef, useState } from 'react';
import IconButton from '../IconButton';
import icons from '@/app/icons';

const HorizontalContainer = ({ children }: { children: ReactNode }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollButtons, setShowScrollButtons] = useState({
    left: false,
    right: false,
  });

  const checkScrollButtonsVisibility = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const canScrollLeft = container.scrollLeft > 0;
      const canScrollRight =
        container.scrollWidth > container.scrollLeft + container.clientWidth;

      setShowScrollButtons({
        left: canScrollLeft,
        right: canScrollRight,
      });
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      checkScrollButtonsVisibility();
      scrollContainer.addEventListener('scroll', checkScrollButtonsVisibility);
      return () => {
        scrollContainer.removeEventListener(
          'scroll',
          checkScrollButtonsVisibility
        );
      };
    }
  }, [children]);

  return (
    <div className='flex flex-col gap-4 relative'>
      <div className='relative flex items-center'>
        {showScrollButtons.left && (
          <IconButton
            onClick={() => scroll('left')}
            className='h-full absolute left-0 z-10 bg-[#060d17] bg-opacity-60 p-2 text-[var(--color-light-tint)]'
            icon={icons.chevronLeft}
          />
        )}
        <div
          ref={scrollContainerRef}
          className='flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth'
        >
          {children}
        </div>
        {showScrollButtons.right && (
          <IconButton
            onClick={() => scroll('right')}
            className='absolute right-0 z-10 bg-[#060d17] bg-opacity-60 p-2 h-full flex items-center justify-center text-[var(--color-light-tint)]'
            icon={icons.chevronRight}
          />
        )}
      </div>
    </div>
  );
};

export default HorizontalContainer;
