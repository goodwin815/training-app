import React from 'react';
import Button from '../Button/button';

const CreateProgramForm: React.FC = () => {
  return (
    <form className="  flex flex-col gap-10 ">
      <div>
        <label htmlFor="email" className="block">
          <h3 className="text-gray-900">Code</h3>
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
          <h3 className="text-gray-900">Number of Levels</h3>
        </label>
        <input
          type="text"
          id="text"
          name="text"
          className="mt-2 h-12 w-full rounded-3xl border bg-gray-50  px-4 py-3 placeholder:text-gray-500"
        />
      </div>
      <Button expand>
        <h3>Create New Program</h3>
      </Button>
    </form>
  );
};

export default CreateProgramForm;
