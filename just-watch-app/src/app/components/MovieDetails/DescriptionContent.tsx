type DescriptionContentProps = {
  title: string;
  content: string | undefined;
};
const DescriptionContent = ({ title, content }: DescriptionContentProps) => {
  return (
    <div>
      <h2 className='font-anton text-[1.5rem] text-[var(--color-light-shade)] uppercase'>
        {title}
      </h2>
      <p className='text-[var(--color-light-shade)]'>{content}</p>
    </div>
  );
};

export default DescriptionContent;
