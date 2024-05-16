import React from 'react';
import Banner from './banner';
import CreateMentorSection from './create-section';

const Page = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Banner />
      <CreateMentorSection />
    </div>
  );
};

export default Page;
