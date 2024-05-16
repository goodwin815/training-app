import React from 'react';
import Banner from './banner';
import LoginSection from './login-section';
import CreateTestFrom from '@/app/_components/Form/create-test';

const OnlineTests = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Banner />
      <LoginSection />
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#EBF5FF] py-24 text-left">
        <div className="flex w-2/3 flex-col gap-14">
          <CreateTestFrom />
        </div>
      </div>
    </div>
  );
};

export default OnlineTests;
