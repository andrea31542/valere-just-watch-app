import HomeComponentWithImage from '../homeComponent/HomeComponentWithImage';

const Home = () => {
  return (
    <div className='min-heigh-screen flex flex-col'>
      <main className='h-screen absolute w-full h-full flex flex-col gap-8 items-center z-0 bg-black font-lato pb-12 top-0'>
        <HomeComponentWithImage />
      </main>
    </div>
  );
};
export default Home;
