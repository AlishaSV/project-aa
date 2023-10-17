'use client';
import { NavLink, TNavLinkProps } from '@/components/navbar/navLink';
import styled from '@emotion/styled';

export const StyledNavbar = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  border-right: 6px solid gainsboro;
  background: #b8bcbc;
  gap: 1px;
  margin-right: 50px;
`;

const links: TNavLinkProps[] = [
  { url: '/', title: 'dashboard' },
  { url: '/users', title: 'users' },
];
export const Navbar = () => {
  return (
    <StyledNavbar>
      {links.map((item) => (
        <NavLink key={item.url} {...item} />
      ))}
    </StyledNavbar>
  );
};
