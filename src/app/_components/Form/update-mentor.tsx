import React from 'react';
import FileUploadBox from '../uploadBox/fileUploadBox';
import Button from '../Button/button';
import UploadPhoto from './uploadPhoto';

const UpdateFormMentor = () => {
  return (
    <form className="flex flex-col gap-10 rounded-[48px] bg-white px-8 py-12">
      <h1 className="text-[#1C64F2]">Update Existing Mentor</h1>
      <div className="flex items-center gap-2">
        <label htmlFor="email" className="block text-nowrap">
          <h3 className="text-gray-900">Email Address</h3>
        </label>
        <input
          type="text"
          id="text"
          name="text"
          className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-3 py-2 placeholder:text-gray-500"
        />
      </div>
      <div className="grid grid-cols-2 grid-rows-4 gap-8">
        <div className="flex items-center gap-2">
          <label htmlFor="email" className="block text-nowrap">
            <h3 className="text-gray-900">Password</h3>
          </label>
          <input
            type="text"
            id="text"
            name="text"
            className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-3 py-2 placeholder:text-gray-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="email" className="block text-nowrap">
            <h3 className="text-gray-900">Confirm Password</h3>
          </label>
          <input
            type="text"
            id="text"
            name="text"
            className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-3 py-2 placeholder:text-gray-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="email" className="block text-nowrap">
            <h3 className="text-gray-900">First Name</h3>
          </label>
          <input
            type="text"
            id="text"
            name="text"
            className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-3 py-2 placeholder:text-gray-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="email" className="block text-nowrap">
            <h3 className="text-gray-900">Last Name</h3>
          </label>
          <input
            type="text"
            id="text"
            name="text"
            className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-3 py-2 placeholder:text-gray-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="email" className="block text-nowrap">
            <h3 className="text-gray-900">D.O.B (dd/mm/yy)</h3>
          </label>
          <input
            type="date"
            id="text"
            name="text"
            className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-3 py-2 placeholder:text-gray-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="email" className="block text-nowrap">
            <h3 className="text-gray-900">Gender</h3>
          </label>
          <select className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-6 py-2 placeholder:text-gray-500" />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="email" className="block text-nowrap">
            <h3 className="text-gray-900">Phone</h3>
          </label>
          <input
            type="text"
            id="text"
            name="text"
            className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-3 py-2 placeholder:text-gray-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="email" className="block text-nowrap">
            <h3 className="text-gray-900">Address</h3>
          </label>
          <input
            type="text"
            id="text"
            name="text"
            className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-3 py-2 placeholder:text-gray-500"
          />
        </div>
      </div>
      <div className="flex w-full justify-between gap-10">
        <div className="flex w-full items-center gap-2">
          <label htmlFor="email" className="block text-nowrap">
            <h3 className="text-gray-900">City</h3>
          </label>
          <select className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-6 py-2 placeholder:text-gray-500" />
        </div>
        <div className="flex w-full items-center gap-2">
          <label htmlFor="email" className="block text-nowrap">
            <h3 className="text-gray-900">State</h3>
          </label>
          <select className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-6 py-2 placeholder:text-gray-500" />
        </div>
        <div className="flex w-full items-center gap-2">
          <label htmlFor="email" className="block text-nowrap">
            <h3 className="text-gray-900">Country</h3>
          </label>
          <select className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-6 py-2 placeholder:text-gray-500" />
        </div>
      </div>

      <div className="flex justify-between gap-10">
        <div className="flex w-full items-center gap-2">
          <label htmlFor="email" className="block text-nowrap">
            <h3 className="text-gray-900">Program</h3>
          </label>
          <select className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-6 py-2 placeholder:text-gray-500" />
        </div>
        <div className="flex w-full items-center gap-2">
          <label htmlFor="email" className="block text-nowrap">
            <h3 className="text-gray-900">Mentor</h3>
          </label>
          <select className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-6 py-2 placeholder:text-gray-500" />
        </div>
      </div>
      <div>
        <UploadPhoto />
      </div>
      <div className="flex items-center gap-10 ">
        <Button expand>
          <h3>Update</h3>
        </Button>
      </div>
    </form>
  );
};

export default UpdateFormMentor;
