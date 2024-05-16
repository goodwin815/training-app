import Button from '@/app/_components/Button/button';
import React from 'react';
import Banner from './banner';
import Image from 'next/image';
import Carousel from '@/app/_components/Carousel/carousel';

const WatchVideos = () => {
  const data = [
    { title: 'You are Enrolled on', subTitle: 'Program 1' },
    { title: 'Your Mentor is', subTitle: 'Mr. Kyle Edwards' },
    { title: 'You are on Level', subTitle: '3' },
  ];
  return (
    <div className="flex min-h-screen flex-col   bg-[#EBF5FF]">
      <Banner />
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 py-24">
        <div className="flex w-2/3 flex-col gap-10">
          <div className="flex w-full items-center justify-between">
            <h1>Watch Videos</h1>
          </div>
          <div className="flex w-full items-center justify-between rounded-[32px] bg-[#E1EFFE] px-6 py-4">
            {data.map((item) => (
              <div className="flex items-center gap-3" key={item.title}>
                <p>{item.title}</p>
                <div className="flex h-10 w-24 items-center justify-center rounded-full bg-[#EBF5FF] text-center">
                  <p className="text-[#1C64F2]">{item.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <p className="text-2xl text-gray-600">Lecture on Program 1-Class 3</p>
          <div className="flex w-1/2 flex-col gap-10">
            <Carousel slides={['1', '2', '3']} />
            <Button expand simple border>
              <h3 className="text-[#1A56DB]">Watch Video with Vimeo</h3>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchVideos;
