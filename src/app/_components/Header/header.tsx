'use client';
import React from 'react';
import Logo from '../Logo/logo';
import Links from './links';
import { AuthButtons } from './auth';
import useScroll from '@/app/_hooks/useScroll';

const Header: React.FC = () => {
  const isScrolled = useScroll();

  return (
    <div
      className={`flex w-full items-center justify-between p-6 ${
        isScrolled
          ? ' fixed top-0 bg-white bg-opacity-70 backdrop-blur-md z-50'
          : '   bg-[#EBF5FF]'
      }`}
    >
      <Logo />
      <Links />
      <div className="flex items-center gap-4">
        <AuthButtons />
      </div>
    </div>
  );
};

export default Header;
