import React from 'react';

const Result = () => {
  return (
    <div className="mt-6 flex h-20 w-full items-center justify-between rounded-[32px] bg-[#E1EFFE] px-6 py-4">
      <div className="flex items-center gap-4">
        <h3 className="text-gray-900">Criteria</h3>
        <div className="flex h-10 w-[332px] items-center justify-center gap-4 rounded-full bg-white">
          <p className="text-green-500">{`Grade < 75 (Do not Pass)`}</p>
          <p className="text-red-600">{`Grade > 75 (Pass to Next Level)`}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <h3>Your Grade</h3>
        <div className="flex h-10 w-20 items-center justify-center rounded-full bg-white ">
          <h3>A+</h3>
        </div>
      </div>
    </div>
  );
};

export default Result;
