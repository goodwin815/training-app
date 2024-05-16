import React from 'react';
import LoginForm from '../_components/Form/login';

const LoginSection: React.FC = () => {
  return (
    <div className="flex h-[80vh] w-full items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default LoginSection;
