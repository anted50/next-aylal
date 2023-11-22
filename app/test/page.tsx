'use client'
import React, { useState } from 'react';
import Link from "next/link";
import { Rating } from 'react-simple-star-rating'
import { useRouter } from 'next/navigation';
import Listlist from './ListGet';


export default function List({ items }: { items: any }) {
    const router = useRouter()
    const [search, setSearch] = useState('');

    // TODO : implement the loop that would display the list 
    return (
        <main>
            <div className='container flex flex-row mx-auto'>
                {/* TODO : implement search and fix the dropdown */}
                <input
                    type="textfield"
                    placeholder="Search"
                    id="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-1/2 block m-1 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                ></input>
                <select
                    className="w-1/2 block m-1 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></select>
            </div>
            <Listlist/> 

        </main>
    )
}

