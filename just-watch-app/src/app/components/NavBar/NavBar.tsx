'use client';
import icons from '../../icons';
import LogInButton from './LogInButtons';
import NavBarLogo from './NavBarLogo';
import IconButton from '../IconButton';
import NavLinkList from '../NavLinkList/NavLinkList';
import SearchBar from './SearchBar';
import { NavLinkProps } from '../NavLinkList/NavLink';
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import LanguageMenu from '../LanguageMenu/LanguageMenu';

const NavBar = () => {
  const pathname = usePathname();
  const navLinks: NavLinkProps[] = useMemo(() => {
    return [
      {
        href: '/pocetna',
        label: 'Početna',
      },
      {
        href: '/novo',
        label: 'Novo',
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

  return (
    <nav className='h-[7.5rem] w-full max-w-[109.5rem] flex flex-row items-center sticky justify-between z-50 bg-transparent top-0 lg:px-[5.5rem] '>
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
          <SearchBar
            placeholder='Pretražite filmove ili serije'
            searchaValue={''}
          />
          <LogInButton />
          <LanguageMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
