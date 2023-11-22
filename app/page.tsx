'use client'
import Link from "next/link";
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { IoFastFood } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const slides = [
    {
      url: 'https://cdn.pixabay.com/photo/2023/11/16/15/17/sea-8392560_1280.jpg',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2023/11/13/18/05/landscape-8386075_1280.jpg',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2023/11/15/16/21/winter-landscape-8390427_1280.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  // const handleClick = (e: { preventDefault: () => void; }) => {
  //   e.preventDefault()
  //   router.push("/homepage")
  // }


  return (
    <main className="m-2 relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-[800px] sm:rounded-lg sm:px-10">

      <div className="max-w-[800px] mx-auto flex flex-row-reverse content-center">
        <div className=" p-5 text-black font-bold text-2xl">
          <Link href="/register">register</Link>
        </div>
        <div className=" p-5 text-black font-bold text-2xl">
          <Link href="/login">login</Link>
        </div>
      </div>

      <div className='max-w-[800px] h-[480px] w-full m-auto py-4 px-4 relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>


      <div className="max-w-[800px] mx-auto flex flex-row mt-10 content-center">
        <button onClick={() => router.push('/homepage')} className="m-2 flex flex-col mx-auto">
          <div className="bg-blue-100 rounded-full w-20 h-20 content-center flex flex-col">
            <IoFastFood className="mx-auto mt-5" color="rgb(23 37 84)" size={40} />
          </div>
          <div className="mt-1 text-sky-950 text-xs font-bold w-20 text-center">Ресторан, хоолны газар</div>
        </button>
        <button onClick={() => router.push('/test')} className="m-2 flex flex-col mx-auto">
          <div className="bg-blue-100 rounded-full w-20 h-20 content-center flex flex-col">
            <FaCarAlt className="mx-auto mt-5" color="rgb(23 37 84)" size={40} />
          </div>
          <div className="mt-1 text-sky-950 text-xs font-bold w-20 text-center">Аялалын газар</div>
        </button>

        <button onClick={() => router.push('/test/test2')} className="m-2 flex flex-col mx-auto">
          <div className="bg-blue-100 rounded-full w-20 h-20 content-center flex flex-col">
            <FaBuilding className="mx-auto mt-5" color="rgb(23 37 84)" size={40} />
          </div>
          <div className="mt-1 text-sky-950 text-xs font-bold w-20 text-center">Зочид буудал</div>
        </button>
      </div>

    </main>

  )
}
