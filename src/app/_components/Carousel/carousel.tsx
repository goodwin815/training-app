'use client';

import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';

interface CarouselProps {
  slides: string[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Transition
        as="div"
        className="flex overflow-hidden"
        enter="transition-transform duration-500"
        enterFrom="transform translate-x-full"
        enterTo="transform translate-x-0"
        leave="transition-transform duration-500"
        leaveFrom="transform translate-x-0"
        leaveTo="transform -translate-x-full"
        show
      >
        <div
          className="flex items-center justify-center"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex w-full flex-shrink-0 items-center justify-center"
            >
              <Image
                src={'/images/students/Bottom content.png'}
                width={796}
                height={447}
                alt="image"
              />
            </div>
          ))}
        </div>
      </Transition>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full  text-gray-700 focus:outline-none"
        onClick={prevSlide}
      >
        <Image width={56} height={56} src="/nav-left.png" alt="nav" />
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full   text-gray-700 focus:outline-none"
        onClick={nextSlide}
      >
        <Image width={56} height={56} src="/nav-right.png" alt="nav" />
      </button>
    </div>
  );
};

export default Carousel;
