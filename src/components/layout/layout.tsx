import { StyledLayout } from '@/components/styledComponents/layout/styledLayout';
import { PropsWithChildren } from 'react';
import { Navbar } from '@/components/navbar';
import { Inter } from 'next/font/google';
import { Logout } from '@/components/logout';

const inter = Inter({ subsets: ['latin'] });

type TLayoutProps = PropsWithChildren;

export const Layout = ({ children }: TLayoutProps) => {
  return (
    <StyledLayout className={inter.className}>
      <div>
        <Logout />
        <Navbar />
      </div>
      <div>{children}</div>
    </StyledLayout>
  );
};
