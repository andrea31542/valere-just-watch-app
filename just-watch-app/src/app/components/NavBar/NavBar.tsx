'use client';
import icons from '../../icons';
import LogInButton from './LogInButtons';
import NavBarLogo from './NavBarLogo';
import IconButton from '../IconButton';
import NavLinkList from '../NavLinkList/NavLinkList';
import SearchBar from '../SearchBar/SearchBar';
import { NavLinkProps } from '../NavLinkList/NavLink';
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import LanguageMenu from '../LanguageMenu/LanguageMenu';
import { useStore } from '@/app/store/store';
import Dropdown from '../Dropdown/Dropdown';
import MovieCard from '../MovieList.tsx/MovieCard';
import { FavouriteMovieType } from '@/app/types/types';

const NavBar = () => {
  const pathname = usePathname();
  const { favourites } = useStore();
  const navLinks: NavLinkProps[] = useMemo(() => {
    return [
      {
        href: '/pocetna',
        label: 'Početna',
      },
      {
        href: '/najgledanije',
        label: 'Najgledanije',
      },
      {
        href: '/omiljeni',
        label: 'Omiljeni',
        className: `${pathname === '/' && 'hidden'} `,
      },
    ];
  }, [pathname]);

  const renderMovieCard = (favourite: FavouriteMovieType, index: number) => (
    <div className='flex flex-row gap-[1rem]' key={index}>
      <MovieCard
        key={index}
        {...favourite}
        showFavIcon={false}
        className='w-[4rem] h-[5rem] object-cover'
      />
      <h2 className='text-[var(--color-light-shade)] content-center'>
        {favourite.alt}
      </h2>
    </div>
  );

  return (
    <nav className='h-[7.5rem] w-full flex flex-row items-center sticky justify-between z-50 bg-[var(--background-color)] top-0 lg:px-[5.5rem] '>
      <div className='flex flex-col lg:flex-row items-center flex-grow lg:gap-[0.5rem]'>
        <div className='flex flex-row items-center justify-between  shrink-0 w-auto'>
          <IconButton
            className='text-[white] h-[3.5rem] lg:invisible'
            icon={icons.menu}
          />
          <Link href='/'>
            <NavBarLogo />
          </Link>
          <IconButton
            className='text-[white] h-[3.5rem] lg:invisible'
            icon={icons.userSettings}
          />
        </div>
        <div className='flex justify-end w-full items-center overflow-visible gap-[0.5rem] px-[1rem]'>
          <NavLinkList links={navLinks} />
          <Dropdown
            items={favourites}
            renderItem={renderMovieCard}
            initialLoadedItems={4}
            loadMoreItems={2}
          />
          <SearchBar placeholder='Pretražite filmove ili serije' />
          <LogInButton />
          <LanguageMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
