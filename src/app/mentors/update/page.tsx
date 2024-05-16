import React from 'react';
import Banner from './banner';
import UpdateFormSection from './update-section';

const Page = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Banner />
      <UpdateFormSection />
    </div>
  );
};

export default Page;
