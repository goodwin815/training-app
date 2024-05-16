import CreateNewMentorForm from '@/app/_components/Form/create-new-mentor';
import React from 'react';

const CreateMentorSection: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#EBF5FF] py-28">
      <div className=" w-2/3">
        <CreateNewMentorForm />
      </div>
    </div>
  );
};

export default CreateMentorSection;
