import UpdateForm from '@/app/_components/Form/update-student';
import React from 'react';

const UpdateFormSection = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#EBF5FF] py-28">
      <div className="w-2/3">
        <UpdateForm />
      </div>
    </div>
  );
};

export default UpdateFormSection;
