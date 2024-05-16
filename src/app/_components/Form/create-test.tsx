import React from 'react';
import Button from '../Button/button';
import PlusIcon from '../icons/plus';
import FileUploadBox from '../uploadBox/fileUploadBox';

const CreateTestForm = () => {
  return (
    <form className="flex flex-col gap-10 rounded-[48px] bg-white px-8 py-12">
      <h1 className="text-[#1C64F2]">Create New Online Test </h1>

      <div className="flex items-center gap-10  ">
        <div className="flex w-1/3 items-center gap-2">
          <label htmlFor="email" className="block text-nowrap">
            <h3 className="text-gray-900">Question #</h3>
          </label>
          <input
            type="text"
            id="text"
            name="text"
            className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-3 py-2 placeholder:text-gray-500"
          />
        </div>
        <div className="flex w-full items-center gap-2">
          <label htmlFor="email" className="block text-nowrap">
            <h3 className="text-gray-900">Question </h3>
          </label>
          <input
            type="text"
            id="text"
            name="text"
            className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-3 py-2 placeholder:text-gray-500"
          />
        </div>
      </div>
      <div className="flex w-full items-center gap-2">
        <label htmlFor="email" className="block text-nowrap">
          <h3 className="text-gray-900">Possible Answer “A” </h3>
        </label>
        <input
          type="text"
          id="text"
          name="text"
          className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-3 py-2 placeholder:text-gray-500"
        />
      </div>
      <div className="flex w-full items-center gap-2">
        <label htmlFor="email" className="block text-nowrap">
          <h3 className="text-gray-900">Possible Answer “B” </h3>
        </label>
        <input
          type="text"
          id="text"
          name="text"
          className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-3 py-2 placeholder:text-gray-500"
        />
      </div>
      <div className="flex w-full items-center gap-2">
        <label htmlFor="email" className="block text-nowrap">
          <h3 className="text-gray-900">Possible Answer “C” </h3>
        </label>
        <input
          type="text"
          id="text"
          name="text"
          className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-3 py-2 placeholder:text-gray-500"
        />
      </div>
      <div className="flex w-full items-center gap-2">
        <label htmlFor="email" className="block text-nowrap">
          <h3 className="text-gray-900">Possible Answer “D” </h3>
        </label>
        <input
          type="text"
          id="text"
          name="text"
          className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-3 py-2 placeholder:text-gray-500"
        />
      </div>
      <div className="flex w-full items-center gap-2">
        <label htmlFor="email" className="block text-nowrap">
          <h3 className="text-gray-900">Correct Answer </h3>
        </label>
        <input
          type="text"
          id="text"
          name="text"
          className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-3 py-2 placeholder:text-gray-500"
        />
      </div>
      <div className="flex items-center gap-10">
        <Button expand simple border>
          <PlusIcon />
          <h3 className="text-[#1A56DB]">Add Another Test</h3>
        </Button>
        <Button expand>
          <h3>Create Test</h3>
        </Button>
      </div>
    </form>
  );
};

export default CreateTestForm;
