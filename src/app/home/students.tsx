import React from 'react';
import { ArrowRight } from '../_components/icons/arrow-right';
import Image from 'next/image';
import Button from '../_components/Button/button';
import Link from 'next/link';

const Students = () => {
  return (
    <div className="flex w-full items-center justify-center gap-10 bg-[#EBF5FF]">
      <div className="flex w-1/2 items-center justify-center">
        <Image
          src="/images/home/Mockup (4).png"
          width={457}
          height={435}
          alt="students"
        />
      </div>
      <div className="flex h-[60vh] w-1/2 flex-col  justify-center gap-6 text-left">
        <h1>Students at VC</h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adiscing elit, sed do eiusmod
          tempor incidt ut labore et <br /> dolore magna aliqua. Ut enim
          exerction ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="flex items-center gap-6">
          <Link href={'/students/create'}>
            <Button large>
              <h3 className="mr-2">Create a New Account</h3>
              {/* TODO : Make this component */}
              <svg
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.913 6.95783C15.9995 6.73906 16.0222 6.49833 15.978 6.26609C15.9339 6.03386 15.8249 5.82055 15.665 5.65317L11.0933 0.865411C10.9878 0.751091 10.8617 0.659906 10.7223 0.597176C10.5828 0.534445 10.4329 0.501426 10.2811 0.500045C10.1294 0.498664 9.97885 0.528948 9.83839 0.589132C9.69793 0.649315 9.57032 0.738191 9.463 0.850575C9.35569 0.962959 9.27083 1.0966 9.21336 1.2437C9.15589 1.3908 9.12697 1.54841 9.12829 1.70734C9.12961 1.86627 9.16114 2.02333 9.22104 2.16936C9.28094 2.31539 9.36801 2.44747 9.47717 2.55788L12.0991 5.30366H1.14293C0.839806 5.30366 0.549097 5.42977 0.334756 5.65423C0.120416 5.8787 0 6.18315 0 6.5006C0 6.81805 0.120416 7.12249 0.334756 7.34696C0.549097 7.57143 0.839806 7.69754 1.14293 7.69754H12.0991L9.47831 10.4421C9.36915 10.5525 9.28208 10.6846 9.22218 10.8306C9.16228 10.9767 9.13075 11.1337 9.12943 11.2927C9.12811 11.4516 9.15703 11.6092 9.2145 11.7563C9.27197 11.9034 9.35683 12.037 9.46415 12.1494C9.57146 12.2618 9.69907 12.3507 9.83953 12.4109C9.97999 12.4711 10.1305 12.5013 10.2823 12.5C10.434 12.4986 10.584 12.4656 10.7234 12.4028C10.8629 12.3401 10.989 12.2489 11.0944 12.1346L15.6661 7.34683C15.772 7.2354 15.8559 7.10322 15.913 6.95783Z"
                  fill="white"
                />
              </svg>
            </Button>
          </Link>
          <Link href={'/students/login'}>
            <Button large simple>
              <h3>Access Student Portal</h3>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Students;
