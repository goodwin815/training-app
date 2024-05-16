import React from 'react';
import Button from '../Button/button';

const StudentLoginForm = () => {
  return (
    <div className="min-h-[376px] w-[448px] rounded-3xl p-8 shadow-lg">
      <form className="  flex flex-col gap-8 ">
        <h1 className="text-center text-[#3F83F8]">Student Login</h1>
        <div>
          <label htmlFor="email" className="block">
            <h3 className="text-gray-900">Username (Your Email)</h3>
          </label>
          <input
            placeholder="name@example.com"
            type="email"
            id="email"
            name="email"
            className="mt-2 h-12 w-full rounded-3xl border bg-gray-50 px-3 py-2 placeholder:text-gray-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block">
            <h3 className="text-gray-900">Password</h3>
          </label>
          <input
            placeholder="••••••••••"
            type="password"
            id="password"
            name="password"
            className="mt-2 h-12 w-full rounded-3xl border bg-gray-50  px-4 py-3 placeholder:text-gray-500"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Button expand>
            <h3>Log In</h3>
          </Button>
          <Button expand simple border>
            <h3 className="text-[#1A56DB]">Create New User</h3>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StudentLoginForm;
