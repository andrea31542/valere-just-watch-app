'use client';
import icons from '@/app/icons';
import IconButton from '../IconButton';
import { ReactNode, useCallback, useRef, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';

type DropdownProps<ItemType> = {
  items: ItemType[];
  renderItem: (item: ItemType, index: number) => ReactNode;
  initialLoadedItems: number;
  loadMoreItems: number;
};

const Dropdown = <ItemType,>({
  items,
  renderItem,
  initialLoadedItems,
  loadMoreItems,
}: DropdownProps<ItemType>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(initialLoadedItems);
  const dropdownRef = useRef<IntersectionObserver | null>(null);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const lastItemRed = useCallback(
    (node: HTMLDivElement) => {
      if (dropdownRef.current) {
        dropdownRef.current.disconnect();
      }

      dropdownRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setVisibleItems((prevState) =>
            Math.min(prevState + loadMoreItems, items.length)
          );
        }
      });

      if (node) {
        dropdownRef.current.observe(node);
      }
    },
    [items.length, loadMoreItems]
  );

  return (
    <div className='relative inline-block'>
      <IconButton
        icon={icons.favourite}
        className='cursor-pointer text-[var(--color-light)]'
        onClick={handleOnClick}
      />
      {isOpen && (
        <div className='absolute flex flex-col z-10 bg-[var(--background-color)] shadow-lg rounded p-[1rem] rounded max-h-[700px] w-[30rem] overflow-y-auto gap-[1rem]'>
          {items.slice(0, visibleItems).map((item, index) => (
            <div
              ref={index === visibleItems - 1 ? lastItemRed : null}
              key={index}
            >
              {renderItem(item, index)}
            </div>
          ))}
          {visibleItems < items.length && <LoadingSpinner />}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
