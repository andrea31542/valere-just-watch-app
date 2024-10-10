'use client';
import icons from '@/app/icons';
import IconButton from '../IconButton';
import { ReactNode, useState } from 'react';

type DropdownProps<ItemType> = {
  items: ItemType[];
  renderItem: (item: ItemType, index: number) => ReactNode;
};

const Dropdown = <ItemType,>({
  items,
  renderItem,
}: DropdownProps<ItemType>) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative inline-block'>
      <IconButton
        icon={icons.favourite}
        className='cursor-pointer text-[var(--color-light)]'
        onClick={handleOnClick}
      />
      {isOpen && (
        <div className='absolute flex flex-col z-10 bg-[var(--background-color)] shadow-lg rounded p-[1rem] rounded max-h-[700px] w-[30rem] overflow-y-auto gap-[1rem]'>
          {items.map((item, index) => (
            <div key={index}>{renderItem(item, index)}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
