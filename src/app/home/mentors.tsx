import React from 'react';
import { ArrowRight } from '../_components/icons/arrow-right';
import Button from '../_components/Button/button';
import Link from 'next/link';

const Mentors: React.FC = () => {
  return (
    <div className="flex w-full justify-around  bg-white p-6 ">
      <div className="flex w-1/4 flex-col gap-6 p-10">
        <h1>Our Mentors</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adiscing elit, sed do eiusmod
          tempor incidt ut labore et dolore magna aliqua. Ut enim exerction
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Link href="students/login" className="w-full">
          <Button expand simple border>
            <h3 className="mr-1 text-[#1A56DB]">Browse Students</h3>
            <ArrowRight />
          </Button>
        </Link>
      </div>
      <div className="flex w-3/4 flex-col items-center gap-4">
        <div className="flex w-full justify-center gap-3">
          <img src="/images/home/Profile Card.png" />
          <img src="/images/home/Profile Card (1).png" />
          <img src="/images/home/Profile Card (2).png" />
        </div>
        <div className="flex w-full justify-center gap-3">
          <img src="/images/home/Profile Card (3).png" />
          <img src="/images/home/Profile Card (4).png" />
        </div>
      </div>
    </div>
  );
};

export default Mentors;
