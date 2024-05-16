import React from 'react';
import Button from '../Button/button';
import Link from 'next/link';

const RegisterTestForm: React.FC = () => {
  return (
    <form className="flex flex-col gap-10 ">
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div>
          <label htmlFor="email" className="block">
            <h3 className="text-gray-900">Program Code</h3>
          </label>
          <input
            type="text"
            id="text"
            name="text"
            className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-3 py-2 placeholder:text-gray-500"
          />
        </div>
        <div>
          <label htmlFor="text" className="block">
            <h3 className="text-gray-900">Program Name</h3>
          </label>
          <input
            type="text"
            id="text"
            name="text"
            className="mt-2 h-12 w-full rounded-3xl border bg-gray-50  px-4 py-3 placeholder:text-gray-500"
          />
        </div>
        <div>
          <label htmlFor="text" className="block">
            <h3 className="text-gray-900">Level</h3>
          </label>
          <input
            type="text"
            id="text"
            name="text"
            className="mt-2 h-12 w-full rounded-3xl border bg-gray-50  px-4 py-3 placeholder:text-gray-500"
          />
        </div>
        <div>
          <label htmlFor="text" className="block">
            <h3 className="text-gray-900">Level Name</h3>
          </label>
          <input
            type="text"
            id="text"
            name="text"
            className="mt-2 h-12 w-full rounded-3xl border bg-gray-50  px-4 py-3 placeholder:text-gray-500"
          />
        </div>
      </div>
      <div>
        <label htmlFor="text" className="block">
          <h3 className="text-gray-900">Number of Questions</h3>
        </label>
        <input
          type="text"
          id="text"
          name="text"
          className="mt-2 h-12 w-full rounded-3xl border bg-gray-50  px-4 py-3 placeholder:text-gray-500"
        />
      </div>
      <Link className="w-full" href={'/online-tests/create'}>
        <Button expand>
          <h3>Create New Online Test</h3>
        </Button>
      </Link>
    </form>
  );
};

export default RegisterTestForm;
