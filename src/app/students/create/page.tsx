import React from 'react';
import Banner from './banner';
import CreateStudentSection from './create-section';

const CreateStudents = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Banner />
      <CreateStudentSection />
    </div>
  );
};

export default CreateStudents;
