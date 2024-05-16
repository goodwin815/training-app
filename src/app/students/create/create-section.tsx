import CreateNewStudentForm from '@/app/_components/Form/create-new-student';
import React from 'react';

const CreateStudentSection: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#EBF5FF] py-28">
      <div className="w-2/3">
        <CreateNewStudentForm />
      </div>
    </div>
  );
};

export default CreateStudentSection;
