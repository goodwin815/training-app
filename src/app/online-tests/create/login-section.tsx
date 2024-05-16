import LoginForm from '@/app/_components/Form/login';
import React from 'react';

const LoginSection: React.FC = () => {
  return (
    <div className="flex h-[80vh] w-full items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default LoginSection;
