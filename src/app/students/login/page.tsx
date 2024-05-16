import React from 'react';
import Banner from './banner';
import LoginSection from './login-section';
import StudentInfo from './student-info';
import TableSection from './table-section';
import Button from '@/app/_components/Button/button';
import PlusIcon from '@/app/_components/icons/plus';
import SearchBar from '@/app/_components/Table/searchBar';
import Link from 'next/link';

const LoginStudents = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Banner />
      <LoginSection />
      <div className="flex min-h-screen w-full items-center justify-center bg-[#EBF5FF]">
        <StudentInfo />
      </div>
      <div className="flex min-h-screen w-full flex-col items-center  gap-10 bg-white p-24">
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full items-center justify-between">
            <h1>Browse of Students </h1>
            <Link href={'/students/create'}>
              <Button large simple border>
                <PlusIcon />
                <h3 className="ml-2 text-[#1A56DB]">Add New Student</h3>
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex w-full flex-col gap-2">
          <SearchBar />
          <TableSection />
        </div>
      </div>
    </div>
  );
};

export default LoginStudents;
