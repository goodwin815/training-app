import Button from '@/app/_components/Button/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const StudentInfo = () => {
  const data = [
    { title: 'You are Enrolled on', subTitle: 'Program 1' },
    { title: 'Your Mentor is', subTitle: 'Mr. Kyle Edwards' },
    { title: 'You are on Level', subTitle: '3' },
  ];
  return (
    <div className="flex min-h-full w-3/4 flex-col items-center justify-center gap-10 rounded-[125px] bg-white py-14">
      <h1>Hello Michael Placide !</h1>
      <div className="grid grid-cols-3 gap-10 border-y border-y-[#E1EFFE] py-4">
        {data.map((item) => (
          <div className="flex flex-col gap-4" key={item.title}>
            <p className="text-xl text-gray-600">{item.title}</p>
            <div className="flex h-10 w-24 items-center justify-center rounded-full bg-[#EBF5FF] text-center">
              <p className="text-[#1C64F2]">{item.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-10">
        <div className="flex cursor-pointer flex-col gap-8 rounded-[32px] bg-[#E1EFFE] px-6 py-4">
          <Image
            src="/images/students/video.png"
            width={200}
            height={200}
            alt="video"
          />
          <Button expand simple border>
            <Link href="/students/watch-videos">
              <h3 className="text-[#1A56DB]">Watch Current Class</h3>
            </Link>
          </Button>
        </div>
        <div className="flex cursor-pointer flex-col gap-8 rounded-[32px] bg-[#E1EFFE] px-6 py-4">
          <Image
            src="/images/students/pdf.png"
            width={200}
            height={200}
            alt="video"
          />
          <Link href={'/students/download'}>
            <Button expand simple border>
              <h3 className="text-[#1A56DB]">Download PDF of Next Class</h3>
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex w-1/3 items-center gap-10">
        <Link href={'/students/view-grades'} className="w-full">
          <Button expand simple border>
            <h3 className="text-[#1A56DB]">View Grades</h3>
          </Button>
        </Link>
        <Link href={'/students/online-tests'} className="w-full">
          <Button expand>
            <h3>Conduct Online Test</h3>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default StudentInfo;
