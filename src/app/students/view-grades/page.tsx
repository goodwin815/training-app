import React from 'react';
import Banner from './banner';
import Link from 'next/link';
import Button from '@/app/_components/Button/button';
import PlusIcon from '@/app/_components/icons/plus';
import Image from 'next/image';
import Table from '@/app/_components/Table/table';
import { columns, data } from './data';

const Page = () => {
  const dataInfo = [
    { title: 'Student', subTitle: 'Edward Jackson' },
    { title: 'Date', subTitle: '12/12/2024' },
    { title: 'Program ', subTitle: 'Program 1' },
    { title: 'Current Level ', subTitle: 'Level 4' },
  ];
  return (
    <div className="flex min-h-screen flex-col ">
      <Banner />
      <div className="flex h-screen w-full flex-col items-center justify-center gap-10  bg-[#EBF5FF]  p-24">
        <div className="flex w-2/3 flex-col">
          <div className="flex w-full items-center justify-between">
            <div className="flex w-full items-center justify-between">
              <h1>View Grades </h1>
              <div className="flex items-center gap-6">
                <Button medium simple border>
                  <h3 className="text-[#1A56DB]">Print</h3>
                </Button>
                <Button medium>
                  <h3>Downlaod</h3>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-10 flex w-full items-center justify-between rounded-[32px] bg-[#E1EFFE] px-6 py-4">
            {dataInfo.map((item) => (
              <div className="flex items-center gap-3" key={item.title}>
                <p>{item.title}</p>
                <div className="flex h-10 w-24 items-center justify-center rounded-full bg-[#EBF5FF] text-center">
                  <p className="text-[#1C64F2]">{item.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 w-full">
            <Table data={data} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
