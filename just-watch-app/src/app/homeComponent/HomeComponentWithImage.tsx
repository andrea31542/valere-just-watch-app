const HomeComponentWithImage = () => {
  return (
    <div className='relative w-full flex h-[46.5rem] flex-col items-center justify-end text-center bg-[url(/home-bg-image.png)] bg-cover z-0'>
      <span className='absolute inset-0 bg-gradient-to-b from-transparent to-black'></span>
      <span className='sticky top-0 w-full h-[-46.5rem] bg-black z-[50] -mt-[100px]'></span>
      home
    </div>
  );
};

export default HomeComponentWithImage;
