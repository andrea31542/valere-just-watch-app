'use client';
import icons from '@/app/icons';
import IconButton from '../IconButton';
import { ReactNode, useCallback, useRef, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';
import classNames from 'classnames';

type DropdownProps<ItemType> = {
  items: ItemType[];
  renderItem: (item: ItemType, index: number) => ReactNode;
  initialLoadedItems: number;
  loadMoreItems: number;
  handleOpen: () => void;
  isOpen: boolean;
  className?: string;
};

const Dropdown = <ItemType,>({
  items,
  renderItem,
  initialLoadedItems,
  loadMoreItems,
  handleOpen,
  isOpen,
  className,
}: DropdownProps<ItemType>) => {
  const [visibleItems, setVisibleItems] = useState(initialLoadedItems);
  const dropdownRef = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback(
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
    <div className={classNames('relative inline-block', className)}>
      <IconButton
        icon={icons.favourite}
        className='cursor-pointer text-[var(--color-light)]'
        onClick={handleOpen}
      />
      {isOpen && (
        <div className='absolute  flex flex-col z-10 bg-[var(--background-color)] shadow-lg rounded p-[1rem] rounded max-h-[60vh] w-[30rem] overflow-y-auto gap-[1rem]'>
          {items.slice(0, visibleItems).map((item, index) => (
            <div
              ref={index === visibleItems - 1 ? lastItemRef : null}
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
