import { footer_links } from '@/app/_lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="flex h-[347px] w-full flex-col items-center justify-center gap-10 bg-gray-800 text-center text-white">
      <div>
        <Image src="/images/home/Logo.png" width={158} height={54} alt="logo" />
      </div>
      <div>
        <h3 className="text-[#C3DDFD]">
          Victory Church Training Centre Designed By By Pastor Gian C Villatoro
        </h3>
      </div>
      <div className="flex items-center gap-10">
        {footer_links.map((item) => (
          <Link href={item.path} key={item.name}>
            <p className="font-light">{item.name}</p>
          </Link>
        ))}
      </div>
      <div>
        <h3 className="text-[#C3DDFD]">
          © 2024 Victory Church. All rights reserved.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
