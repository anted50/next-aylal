import Image from "next/image";
import React from "react";


async function getInfo() {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    },
    body: JSON.stringify({ "id": 1 }),
  };

  const response = await fetch('http://localhost:5000/get', requestOptions)
  const data = await response.json()
  return data
}

function typeConverter(a: String) {
  if (a == 'both') {
    const b = "Гэр, байшин"
    return b
  }
}
function foodConverter(a: boolean) {
  if (a == true) {
    const b = "Хоолтой"
    return b
  }
  if (a == false) {
    const b = "Хоолгүй"
    return b
  }
}
export default async function Home() {
  const info = await getInfo()
  return (
    <div >
      <section className="w-full flex-center flex-col py-2 space-y-2">

        <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <img src={info.URL} />
        </div>

        <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <h1 className="text-center text-3xl font-bold">{info.Title}</h1>
        </div>

        <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <p>{info.Description}</p>
        </div>

        <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <table className="table-auto">
            <tr>
              <td className="font-bold">Үнэ : </td>
              <td>{info.Price}</td>
            </tr>
            <tr>
              <td className="font-bold">Хүний багтаамж : </td>
              <td>{info.Capacity}</td>
            </tr>
            <tr>
              <td className="font-bold">Сууц : </td>
              <td>{typeConverter(info.Type)}</td>
            </tr>
            <tr>
              <td className="font-bold">Хоол : </td>
              <td>{foodConverter(info.hasCompFood)}</td>
            </tr>
            <tr>
              <td className="font-bold">Нэмэлт : </td>
              <td>{info.additional}</td>
            </tr>
          </table>
        </div>

        <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <table className="table-auto">
            <tr>
              <td className="font-bold">Холбогдох дугаар : </td>
              <td>{info.ContactNo}</td>
            </tr>
          </table>
        </div>

      </section>
    </div>
  )
}
