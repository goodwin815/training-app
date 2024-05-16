import Image from 'next/image';
import React from 'react';
import PenIcon from '../icons/pen';
import Button from '../Button/button';

const UploadPhoto = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3>Picture</h3>
      <div className=" relative flex w-40 flex-col">
        <Image
          src={'/images/mentors/Avatar (1).png'}
          width={165}
          height={165}
          alt="avatar"
        />
        <button className="absolute right-1/2 top-1/2">
          <PenIcon />
        </button>
      </div>
      <div>
        <Button large border simple>
          <h3 className="text-[#1A56DB]">Delete Photo</h3>
        </Button>
      </div>
    </div>
  );
};

export default UploadPhoto;
