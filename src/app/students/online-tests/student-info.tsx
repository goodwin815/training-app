import Button from '@/app/_components/Button/button';
import Link from 'next/link';
import React from 'react';
const dataInfo = [
  { title: 'Student', subTitle: 'Edward Jackson' },
  { title: 'Date', subTitle: '12/12/2024' },
  { title: 'Program ', subTitle: 'Program 1' },
  { title: 'Current Level ', subTitle: 'Level 4' },
];

const StudentInfo = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full items-center justify-between">
          <h1>Online Test </h1>
          <Link href={'/students/create'}>
            <Button large>
              <h3>Process Test</h3>
            </Button>
          </Link>
        </div>
      </div>
      <div className="my-10 flex w-full items-center justify-between rounded-[32px] bg-[#E1EFFE] px-6 py-4">
        {dataInfo.map((item) => (
          <div className="flex items-center gap-3" key={item.title}>
            <p>{item.title}</p>
            <div className="flex h-10 w-24 items-center justify-center rounded-full bg-[#EBF5FF] text-center">
              <p className="text-[#1C64F2]">{item.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StudentInfo;
