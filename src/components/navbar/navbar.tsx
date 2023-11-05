'use client';
import { NavLink, TNavLinkProps } from '@/components/navbar/navLink';
import styled from '@emotion/styled';
import { ChartPie, Detective, UsersThree } from '@phosphor-icons/react';

export const StyledNavbar = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  background-color: #212121;
  border-right: 2px solid #969797;
  gap: 0.5px;
  margin-right: 50px;
`;

const links: Omit<TNavLinkProps, 'isWithTitle'>[] = [
  { url: '/', title: 'dashboard', icon: <ChartPie size={24} /> },
  { url: '/users', title: 'users', icon: <UsersThree size={24} /> },
  { url: '/roles', title: 'roles', icon: <Detective size={24} /> },
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
