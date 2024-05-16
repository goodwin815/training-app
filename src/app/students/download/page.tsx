import React from 'react';
import Banner from './banner';
import Link from 'next/link';
import Button from '@/app/_components/Button/button';
import PlusIcon from '@/app/_components/icons/plus';
import Image from 'next/image';

const Page = () => {
  const data = [
    { title: 'You are Enrolled on', subTitle: 'Program 1' },
    { title: 'Your Mentor is', subTitle: 'Mr. Kyle Edwards' },
    { title: 'You are on Level', subTitle: '3' },
  ];
  return (
    <div className="flex min-h-screen flex-col ">
      <Banner />
      <div className="flex h-screen w-full flex-col items-center justify-center gap-10  bg-[#EBF5FF]  p-24">
        <div className="flex w-2/3 flex-col">
          <div className="flex w-full items-center justify-between">
            <div className="flex w-full items-center justify-between">
              <h1>Download PDF </h1>
              <Link href={'/students/view-grades'}>
                <Button large simple border>
                  <PlusIcon />
                  <h3 className="ml-2 text-[#1A56DB]">View Grades</h3>
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-10 flex w-full items-center justify-between rounded-[32px] bg-[#E1EFFE] px-6 py-4">
            {data.map((item) => (
              <div className="flex items-center gap-3" key={item.title}>
                <p>{item.title}</p>
                <div className="flex h-10 w-24 items-center justify-center rounded-full bg-[#EBF5FF] text-center">
                  <p className="text-[#1C64F2]">{item.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex w-full items-center justify-between rounded-[32px] bg-[#E1EFFE] px-6 py-4">
            <div className="flex w-full flex-col rounded-[32px] bg-white">
              <div className="flex w-full items-center justify-between p-6">
                <div className="flex w-[220px] items-center gap-2 ">
                  <Image
                    src="/images/students/doc.png"
                    width={21}
                    height={28}
                    alt="pdf"
                  />
                  <div className="flex items-center gap-1">
                    <p className="text-lg text-gray-900">Lecture 1.pdf </p>
                    <span className="text-lg text-gray-500"> (15 MB)</span>
                  </div>
                </div>
                <div className="w-full">
                  <hr />
                </div>
                <div className="flex w-[200px] items-center justify-center">
                  <Button small simple border>
                    <h3 className="text-[#1A56DB]">View</h3>
                  </Button>
                </div>
              </div>
              <div className="flex w-full items-center justify-between p-6">
                <div className="flex w-[220px] items-center gap-2 ">
                  <Image
                    src="/images/students/doc.png"
                    width={21}
                    height={28}
                    alt="pdf"
                  />
                  <div className="flex items-center gap-1">
                    <p className="text-lg text-gray-900">Lecture 1.pdf </p>
                    <span className="text-lg text-gray-500"> (15 MB)</span>
                  </div>
                </div>
                <div className="w-full">
                  <hr />
                </div>
                <div className="flex w-[230px] items-center justify-center">
                  <Button  border>
                    Download PDF
                  </Button>
                </div>
              </div>
              <div className="flex w-full items-center justify-between p-6">
                <div className="flex w-[220px] items-center gap-2 ">
                  <Image
                    src="/images/students/doc.png"
                    width={21}
                    height={28}
                    alt="pdf"
                  />
                  <div className="flex items-center gap-1">
                    <p className="text-lg text-gray-900">Lecture 1.pdf </p>
                    <span className="text-lg text-gray-500"> (15 MB)</span>
                  </div>
                </div>
                <div className="w-full">
                  <hr />
                </div>
                <div className="flex w-[200px] items-center justify-center">
                  <Button small red>
                    Pause
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
