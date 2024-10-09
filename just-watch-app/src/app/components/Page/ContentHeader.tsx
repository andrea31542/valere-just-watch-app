type ContentHeaderType = {
  title: string;
  content: string;
};

const ContentHeader = ({ title, content }: ContentHeaderType) => {
  return (
    <section className=' flex flex-col px-[1rem] lg:px-[4rem] relative min-w-[10rem] text-[var(--color-secondary-contrast)]'>
      <h1 className='text-[var(--color-secondary-contrast)] text-xl mt-[1rem]'>
        {title}
      </h1>
      <p className='text-[var(--color-light-shade)] text-base leading-normal'>
        {content}
      </p>
    </section>
  );
};
export default ContentHeader;
