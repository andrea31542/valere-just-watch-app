import { ReactNode } from 'react';
import NavBar from '../components/NavBar/NavBar';

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='relative z-0 '>
      <NavBar />
      <div className='min-h-screen flex flex-col lg:pt-[3.5rem]'>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
