import Image from 'next/image';

type ImageType = 'circle' | 'square';

export type SearchItemCardProps = {
  imageType: ImageType;
  imagePath: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
};

const SearchItemCard = ({
  imageType = 'circle',
  imagePath,
  title,
  subtitle,
  onClick,
}: SearchItemCardProps) => {
  const imageSize = {
    circle: { height: 50, width: 50 },
    square: { height: 80, width: 50 },
  } satisfies Record<ImageType, { width: number; height: number }>;

  const imageClass =
    imageType === 'circle' ? 'rounded-full' : 'rounded-[0.25rem]';

  return (
    <div
      className='flex items-center cursor-pointer gap-[1rem] w-full hover:bg-[var(--color-secondary)] p-[0.5rem] rounded-[0.25rem]'
      onClick={onClick}
    >
      <span>
        <Image
          className={`${imageClass} object-cover`}
          src={imagePath}
          alt={title}
          layout='fixed'
          height={imageSize[imageType].height}
          width={imageSize[imageType].width}
        />
      </span>
      <div className='flex flex-col gap-[0.5rem]'>
        <p className='text-lg font-medium text-white'>{title}</p>
        {subtitle && (
          <p className='text-base text-[var(--color-light-shade)]'>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchItemCard;
