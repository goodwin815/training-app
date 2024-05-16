import React from 'react';
import Card from '../_components/Card/card';
import { cardsData } from './data';

const VcSection: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center  gap-8 bg-[#EBF5FF] py-24 text-center">
      <div className="flex flex-col gap-2">
        <h1>VC Training Center-Admin Main Menu </h1>
      </div>
      <div className="mt-6 grid grid-cols-2 grid-rows-2 gap-12 ">
        {cardsData.map(({ title, subTitle, src }) => (
          <Card title={title} subTitle={subTitle} src={src} key={src} />
        ))}
      </div>
    </div>
  );
};

export default VcSection;
