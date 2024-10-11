import classNames from 'classnames';
import { ReactNode } from 'react';

type ShortCardProps = {
  title: string;
  content: string | ReactNode;
  className?: string;
};

const ShortCard = ({ title, content, className }: ShortCardProps) => {
  return (
    <div
      className={classNames(
        'flex flex-col gap-[0.5rem] text-[var(--color-light-shade)]',
        className
      )}
    >
      <h3 className='uppercase text-xl text-[var(--color-gray-text)] font-bold'>
        {title}
      </h3>
      <div className=''>{content}</div>
    </div>
  );
};

export default ShortCard;
