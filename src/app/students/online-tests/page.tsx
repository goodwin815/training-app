import React from 'react';
import Banner from './banner';
import TestForm from './test-form';
import StudentInfo from './student-info';
import Result from './result';

const Page = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Banner />
      <div className="flex min-h-screen w-full flex-col items-center  gap-10 bg-[#EBF5FF] p-24">
        <div className="w-2/3">
          <StudentInfo />
          <TestForm />
          <Result />
        </div>
      </div>
    </div>
  );
};

export default Page;
