import React from 'react';
import StudentLoginForm from '@/app/_components/Form/student-login';

const LoginSection: React.FC = () => {
  return (
    <div className="flex h-[80vh] w-full items-center justify-center">
      <StudentLoginForm />
    </div>
  );
};

export default LoginSection;
