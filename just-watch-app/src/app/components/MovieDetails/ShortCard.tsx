import { ReactNode } from 'react';

type ShortCardProps = {
  title: string;
  content: string | ReactNode;
};

const ShortCard = ({ title, content }: ShortCardProps) => {
  return (
    <div className='flex flex-col gap-[0.5rem] text-[var(--color-light-shade)]'>
      <h3 className='uppercase text-xl text-[var(--color-gray-text)] font-bold'>
        {title}
      </h3>
      <div className=''>{content}</div>
    </div>
  );
};

export default ShortCard;
