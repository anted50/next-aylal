'use client'
import { title } from 'process';
import React, { useState } from 'react';
import Link from "next/link";
import { Rating } from 'react-simple-star-rating'
import { StarIcon } from 'react-simple-star-rating/dist/components/StarIcon';

export default function List() {
    const [search, setSearch] = useState('');
    const [responseData, setResponseData] = useState(null);


    const title = "Lorem Ipsum"
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis ut tortor ac pharetra. Ut rhoncus erat lacus, sit amet aliquam neque eleifend vestibulum. Donec a sodales eros. Suspendisse consequat nulla eget scelerisque efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus nec condimentum eros. Nam eu elit leo. Fusce quis accumsan odio. Proin dapibus nunc at luctus euismod."
    const rating = 4
    // const login = async () => {
    //     const data = {
    //         search: search,
    //     };
    //     const json = JSON.stringify(data);
    //     const url = 'http://localhost:5000/login';
    //     console.log(json)

    //     try {
    //         const response = await fetch(url, {
    //             method: 'POST',
    //             body: json
    //         });

    //         if (response.ok) {
    //             const data = await response.json();
    //             setResponseData(data);
    //             if (data.success === true) {
    //             }
    //         } else {
    //             console.error('Login failed. HTTP status:', response.status);
    //         }
    //     } catch (error) {
    //         console.error('An error occurred:', error);
    //     }
    // };
    return (
        <main>
            <div className='container flex flex-row mx-auto'>
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
            <div className="m-1 container container-sm mx-auto bg-slate-100 flex flex-row rounded">
                <img src={"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80"}
                    style={{ "height": "150px", "width": "150px", "objectFit": "cover" }}
                    className='m-2 rounded'
                />
                <div className='m-1 flex flex-col'>
                    <Link className='text-2xl' href="/homepage">{title}</Link>
                    <div className=''>
                        <Rating
                            iconsCount={5}
                            readonly
                            initialValue={rating}
                            size={19}
                            SVGstyle={{ 'display': 'inline' }}
                        ></Rating>
                    </div>
                    {/* TODO : fix text overflow */}
                    <div className='h-20 text-ellipsis overflow-hidden'>{description}</div>
                    <Link className='underline' href="/homepage">More...</Link>
                </div>
            </div>

        </main>
    )
}

