'use client';
import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

export type NavLinkProps = {
  href: LinkProps['href'];
  label: string;
  className?: string;
};
const NavLink = ({ href, label, className }: NavLinkProps) => {
  const pathname = usePathname();
  const isVisited = pathname === '/' || pathname === href;

  return (
    <Link
      href={href}
      // key={item.id}
      // href={item.href as string}
      // className={`hover:text-[#d5d5d5] last:hidden sm:last:block ${
      //   isExpanded && 'hidden sm:block'
      // } ${pathname === item.href && 'text-[#d5d5d5] font-bold'} `}
      className={classNames(
        className,
        isVisited
          ? 'text-[var(--color-light)] font-bold'
          : 'text-[var(--color-nav-link)]',
        'hover:text-[var(--color-light)]'
      )}
    >
      {label}
    </Link>
  );
};

export default NavLink;
