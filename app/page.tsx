'use client'
import Link from "next/link";
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
// import { IoFastFood } from "react-icons/io5";
// import { FaCarAlt } from "react-icons/fa";
// import { FaBuilding } from "react-icons/fa";
import router, { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
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
    <main className="bg-neutral-200">
      <div className='max-w-[800px] h-[480px] w-full m-auto py-16 px-4 relative group'>
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


      {/* TODO : make the button redirect to a path*/}
      <div className="flex flex-row m-10 content-center">
        <div className="">
          <button onClick={() => router.push('/homepage')} className="m-3 p-4 bg-sky-200 rounded-full w-20 h-20 content-center">
            {/* <IoFastFood color="rgb(8 47 73)" size={32} /> */}
            <div className="text-sky-950 text-xs font-bold">Ресторан, хоолны газар</div>
          </button>
        </div>

        <div className="">
          <button onClick={() => router.push('/homepage')} className="m-3 p-4 bg-sky-200 rounded-full w-20 h-20 content-center">
            {/* <FaCarAlt color="rgb(8 47 73)" size={32} /> */}
            <div className="text-sky-950 text-xs font-bold">Унаа</div>
          </button>
        </div>

        <div className="">
          <button onClick={() => router.push('/homepage')} className="m-3 p-4 bg-sky-200 rounded-full w-20 h-20 content-center">
            {/* <FaBuilding color="rgb(8 47 73)" size={32} /> */}
            <div className="text-sky-950 text-xs font-bold">Зочид буудал</div>
          </button>
        </div>

        <div className="">
          <button onClick={() => router.push('/homepage')} className="m-3 p-4 bg-sky-200 rounded-full w-20 h-20 content-center">
            {/* <FaBuilding color="rgb(8 47 73)" size={32} /> */}
            <div className="text-sky-950 text-xs font-bold">Амралтын газар</div>
          </button>
        </div>

        <div className="">
          <button onClick={() => router.push('/homepage')} className="m-3 p-4 bg-sky-200 rounded-full w-20 h-20 content-center">
            {/* <FaBuilding color="rgb(8 47 73)" size={32} /> */}
            <div className="text-sky-950 text-xs font-bold">Шатахуун</div>
          </button>
        </div>
      </div>


      <div className=" p-5 text-black font-bold text-2xl">
        <Link href="/homepage">page</Link>
      </div>
      <div className=" p-5 text-black font-bold text-2xl">
        <Link href="/login">login</Link>
      </div>
      <div className=" p-5 text-black font-bold text-2xl">
        <Link href="/register">register</Link>
      </div>
      <div className=" p-5 text-black font-bold text-2xl">
        <Link href="/test">test</Link>
      </div>
    </main>

  )
}
