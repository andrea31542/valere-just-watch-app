import NavLink, { NavLinkProps } from './NavLink';

type NavLinkListProps = {
  links: NavLinkProps[];
};

const NavLinkList = ({ links }: NavLinkListProps) => {
  return (
    <div className='flex flex-row gap-[0.5rem] lg:gap-[2rem] px-[0.5rem]'>
      {links.map((link) => (
        <NavLink key={link.label} {...link} />
      ))}
    </div>
  );
};

export default NavLinkList;
