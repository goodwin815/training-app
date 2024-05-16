import React from 'react';
import Banner from './banner';
import LoginSection from './login-section';
import RegisterTestForm from '../_components/Form/register-test';

const OnlineTests = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Banner />
      <LoginSection />
      <div className="flex h-screen w-full flex-col items-center justify-center bg-[#EBF5FF] text-left">
        <div className="flex w-2/3 flex-col gap-14">
          <h1>Register New Online Test</h1>
          <RegisterTestForm />
        </div>
      </div>
    </div>
  );
};

export default OnlineTests;
