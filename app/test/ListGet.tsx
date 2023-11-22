'use client'
import React from 'react';
import router from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";

async function getList() {
  //maybe implement pagination here
  const res = await fetch("http://localhost:5000/list/1");
  return res.json();
}

export default async function Listlist() {
  const router = useRouter()
  try {
    const data = await getList();

    if (!data || !data.results || !Array.isArray(data.results)) {
      throw new Error("Invalid data structure");
    }

    return (
      <>
        {data.results.map((list, idx) => (
          <div key={idx} className="p-2">
            <div className="flex flex-row bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-[800px] sm:rounded-lg sm:px-10">
              <img
                onClick={() => router.push(`/test/${list.ID}`)}
                src={list.URL}
                style={{ "height": "150px", "width": "150px", "objectFit": "cover" }}
                className='m-2 rounded'
              />
              <div className='m-1 flex flex-col'>
                <Link className='text-2xl' href={`/test/${list.ID}`} >{list.Title}</Link>
                <div className=''>
                  <Rating
                    iconsCount={5}
                    readonly
                    initialValue={4}
                    size={19}
                    SVGstyle={{ 'display': 'inline' }}
                  ></Rating>
                </div>
                {/* TODO: fix text overflow */}
                <div className='h-20 text-ellipsis overflow-hidden'>{list.Description}</div>
                <Link className='underline' href={`/test/${list.ID}`}>More...</Link>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  } catch (error) {
    console.error("Error fetching or processing data:", error);
    return <div>Error loading data</div>;
  }
}
