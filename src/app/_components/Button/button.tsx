import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  backgroundColor?: string;
  border?: boolean;
  simple?: boolean;
  expand?: boolean;
  large?: boolean;
  small?: boolean;
  red?: boolean;
  medium?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  children,
  simple,
  border,
  expand,
  large,
  small,
  red,
  medium,
}) => {
  return (
    <button
      className={clsx(
        'flex h-12 w-36 items-center justify-center rounded-full bg-[#1A56DB] px-5 py-2  text-white ',
        simple ? 'bg-white !text-black' : '',
        border ? 'border border-[#1A56DB]' : '',
        className,
        expand ? 'w-full' : 'w-36',
        large ? 'w-64' : 'w-36',
        medium ? 'w-44' : 'w-36',
        small
          ? '!h-10 !w-16 px-3 py-2 text-base font-extralight tracking-wide'
          : '',
        red ? 'border border-red-700 bg-white !text-red-700' : '',
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
