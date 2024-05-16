import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  subTitle: string;
  src: string;
}

const Card: React.FC<CardProps> = ({ title, subTitle, src }) => {
  return (
    <div className="flex h-[512px] w-[476px] flex-col gap-6 rounded-3xl bg-white   px-5 py-8">
      <Image
        src={src}
        width={436}
        height={288}
        alt="mockup"
        className="rounded-2xl"
      />
      <div className="flex flex-col items-center justify-center gap-10">
        <h1>{title}</h1>
        <div className="flex h-8 w-32 items-center justify-center rounded-full bg-gray-100">
          <p>{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
