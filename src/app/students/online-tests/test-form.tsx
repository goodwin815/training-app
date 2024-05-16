'use client';

import Button from '@/app/_components/Button/button';
import React, { useState } from 'react';

interface Question {
  title: string;
  subTitle: string;
}

const TestForm: React.FC = () => {
  const questions: Question[] = [
    {
      title: 'Possible Answer “A”',
      subTitle: 'Lorem ipsum dolor sit amet, bore et dolore magna ',
    },
    { title: 'Possible Answer “B”', subTitle: 'Lorem ipsum dolor sit amet, ' },
    {
      title: 'Possible Answer “C”',
      subTitle: 'Lorem ipsum dolor sit amet, bore et dolore magna ',
    },
    { title: 'Possible Answer “D”', subTitle: 'Lorem ipsum dolor sit amet, ' },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  const handleButtonClick = (index: number, title: string) => {
    setActiveIndex(index);
    setActiveTitle(title);
  };

  return (
    <div className="flex flex-col items-center gap-10 rounded-[32px] bg-white px-10 py-24 transition-all duration-300 ease-in-out ">
      <h1 className="text-[#1C64F2]">Question 10</h1>
      <div className="flex items-center gap-2">
        <h3 className="text-gray-900">Question</h3>
        <div className="flex h-14 w-[690px] items-center justify-center rounded-full bg-[#EBF5FF] px-4 py-3 text-[#1C64F2]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua? Input text
        </div>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-16 border-y py-20 ">
        <h3 className="text-gray-500">
          Select one of the following possible answers:
        </h3>
        <div className="w-full">
          <div className="grid grid-cols-2 grid-rows-2 gap-10">
            {questions.map((item, index) => (
              <button
                key={item.title}
                className="flex items-center gap-2"
                onClick={() => handleButtonClick(index, item.title)}
              >
                <h3
                  className={`  ${activeIndex === index ? 'text-[#1C64F2]' : 'text-gray-800'}`}
                >
                  {item.title}
                </h3>
                <div
                  className={`flex h-[48px] w-[306px] items-center justify-center rounded-full ${
                    activeIndex === index
                      ? 'border-2 border-[#1C64F2] bg-[#C3DDFD]'
                      : 'bg-[#EBF5FF]'
                  } text-gray-600`}
                >
                  {item.subTitle}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      {activeTitle && (
        <div className="flex items-center gap-4">
          <h3 className="text-gray-900">Your Answer</h3>
          <div className="flex h-12 w-36 items-center justify-center rounded-full bg-[#EBF5FF]">
            <h3 className="text-[#1C64F2]">{activeTitle}</h3>
          </div>
        </div>
      )}

      <div className="flex w-full items-center gap-6">
        <Button expand border simple>
          <h3 className="text-[#1A56DB]">Next Question</h3>
        </Button>
        <Button expand>
          <h3>Previous Question</h3>
        </Button>
      </div>
    </div>
  );
};

export default TestForm;
