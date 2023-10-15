import { NavLink, TNavLinkProps } from '@/components/navbar/navLink';

type TLoginNavbarProps = {
  links: TNavLinkProps[];
};

export const GuestNavbar = ({ links }: TLoginNavbarProps) => {
  return (
    <>
      {links.map((item) => (
        <NavLink key={item.url} {...item} />
      ))}
    </>
  );
};
