'use client';
import { NavLink, TNavLinkProps } from '@/components/navbar/navLink';
import styled from '@emotion/styled';

export const StyledNavbar = styled.div`
  display: flex;
  gap: 10px;
`;

const links: TNavLinkProps[] = [{ url: '/users', title: 'users' }];
export const Navbar = () => {
  return (
    <StyledNavbar>
      {links.map((item) => (
        <NavLink key={item.url} {...item} />
      ))}
    </StyledNavbar>
  );
};
