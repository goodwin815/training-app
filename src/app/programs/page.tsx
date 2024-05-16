import React from 'react';
import Banner from './banner';
import LoginSection from './login-section';
import CreateProgramForm from '../_components/Form/create-program';
import Button from '../_components/Button/button';
import PlusIcon from '../_components/icons/plus';
import TableSection from './table-section';

const Programs = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Banner />
      <LoginSection />
      <div className="flex h-screen w-full flex-col items-center justify-center bg-[#EBF5FF] text-left">
        <div className="flex w-2/3 flex-col gap-14">
          <h1>Create New Program</h1>
          <CreateProgramForm />
        </div>
      </div>
      <div className="flex min-h-screen w-full flex-col items-center  gap-10 bg-white p-24">
        <div className="flex w-full items-center justify-between">
          <h1>List of Programs</h1>
        </div>
        <TableSection />
      </div>
    </div>
  );
};

export default Programs;
