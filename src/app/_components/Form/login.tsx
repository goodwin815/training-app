import React from 'react';
import Button from '../Button/button';

const LoginForm = () => {
  return (
    <div className="min-h-[376px] w-[448px] rounded-3xl p-8 shadow-lg">
      <form className="  flex flex-col gap-8 ">
        <h1 className="text-center text-[#3F83F8]">Admin Login</h1>
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
        <Button expand>
          <h3>Log In</h3>
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
