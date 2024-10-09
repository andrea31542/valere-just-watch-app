import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NavBarLogo = () => {
  const pathname = usePathname();

  return (
    <Image
      src='/just-watch-logo.svg'
      alt='logo'
      width={240}
      height={70}
      className={`${
        pathname === '/' ? 'w-[8rem] lg:w-[14.5rem]' : 'w-[8rem] h-[1rem]'
      }`}
    />
  );
};

export default NavBarLogo;
