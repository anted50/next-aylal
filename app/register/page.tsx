'use client'
import { register } from "module";
import Link from "next/link";
import React, { useState } from "react";

export default function FirstPost() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [responseData, setResponseData] = useState(null);

  const register = async () => {
    const data = {
      username: username,
      password: password
    };
    const json = JSON.stringify(data);
    const url = 'http://localhost:5000/register';
    console.log(json)

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: json
      });

      if (response.ok) {
        const data = await response.json();
        setResponseData(data);
        if (data.success === true) {
        }
      } else {
        console.error('Login failed. HTTP status:', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  return (
    <main className="w-full flex-center flex-col py-2 space-y-2 content-center">
      {/* <form> */}
      <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <h6 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          <Link href="/">Back to home</Link>
        </h6>
        <h6 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl">Register</h6>
        <div className="m-5">
          <input
            type="textfield"
            placeholder="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          ></input>
        </div>
        <div className="m-5">
          <input
            type="password"
            placeholder="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          ></input>
        </div>
        <div className="content-center">
          <button onClick={register} className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Register
          </button>
        </div>
        {responseData && (
          <div>
            <h2>JSON Response:</h2>
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
          </div>
        )}
      </div>
    </main>
  );
}
