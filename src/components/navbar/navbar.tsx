'use client';
import { NavLink, TNavLinkProps } from '@/components/navbar/navLink';
import styled from '@emotion/styled';

export const StyledNavbar = styled.div`
  padding: 7px;
  display: flex;
  flex-direction: column;
  background-color: #212121;
  border-right: 2px solid #969797;
  gap: 0.5px;
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
