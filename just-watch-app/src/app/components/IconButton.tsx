'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

type IconButtonsProps = {
  icon: IconDefinition;
  className?: string;
  onClick?: () => void;
};

const IconButton = ({
  icon = faHome,
  onClick,
  className,
}: IconButtonsProps) => {
  return (
    <button
      className={classNames('h-[2rem] px-[1rem] cursor-pointer', className)}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default IconButton;
