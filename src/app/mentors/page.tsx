import React from 'react';
import Banner from './banner';
import LoginSection from './login-section';
import RegisterTestForm from '../_components/Form/register-test';
import Button from '../_components/Button/button';
import Table from '../_components/Table/table';
import TableSection from './table-section';
import PlusIcon from '../_components/icons/plus';
import Link from 'next/link';

const Mentors = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Banner />
      <LoginSection />
      <div className="flex h-[70vh] w-full flex-col items-center justify-center gap-20 bg-[#EBF5FF] text-center ">
        <h1>Mentors AT VC Training Center</h1>
        <div className="flex items-center gap-6">
          <Link href={'/mentors/update'} className="w-full">
            <Button large simple border>
              <h3 className="text-[#1A56DB]">Update Existing Mentor</h3>
            </Button>
          </Link>

          <Link href={'/mentors/create'} className="w-full">
            <Button large>
              <h3>Create New Mentor</h3>
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex min-h-screen w-full flex-col items-center  gap-10 bg-white p-24">
        <div className="flex w-full items-center justify-between">
          <h1>List of Mentors</h1>
          <Link href={'/mentors/create'}>
            <Button large simple border>
              <PlusIcon />
              <h3 className="ml-2 text-[#1A56DB]">Add New Mentor</h3>
            </Button>
          </Link>
        </div>
        <TableSection />
      </div>
    </div>
  );
};

export default Mentors;
