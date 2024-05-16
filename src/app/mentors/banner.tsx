import Image from 'next/image';

const Banner: React.FC = () => {
  return (
    <div className=" flex  h-60 w-full flex-col items-center justify-center gap-6 bg-[url(/images/tests/Hero.png)] bg-cover bg-center bg-no-repeat text-center ">
      <p className="text-6xl text-gray-900">Mentors Main Menu VCTC</p>
    </div>
  );
};

export default Banner;
