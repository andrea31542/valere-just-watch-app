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
