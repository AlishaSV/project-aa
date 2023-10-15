'use client';

import { StyledLayout } from '@/components/styledComponents/layout/styledLayout';
import { PropsWithChildren } from 'react';
import { Navbar } from '@/components/navbar';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <StyledLayout className={inter.className}>
      <Navbar />
      <div>{children}</div>
    </StyledLayout>
  );
};
