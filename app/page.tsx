import Image from "next/image";

async function getInfo() {

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    },
    body: JSON.stringify({ "id": 2 }),
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
    <div>
      <main>

        <div>
          <Image src={info.URL} alt={"aaa"} width={500} height={500} />
        </div>

        <div>
          <h1>{info.Title}</h1>
        </div>

        <div className="container">
          <p>{info.Description}</p>
        </div>

        <div>
          <table>
            <tr>
              <td>Үнэ : </td>
              <td>{info.Price}</td>
            </tr>
            <tr>
              <td>Хүний багтаамж : </td>
              <td>{info.Capacity}</td>
            </tr>
            <tr>
              <td>Сууц : </td>
              <td>{typeConverter(info.Type)}</td>
            </tr>
            <tr>
              <td>Хоол : </td>
              <td>{foodConverter(info.hasCompFood)}</td>
            </tr>
            <tr>
              <td>Нэмэлт : </td>
              <td>{info.additional}</td>
            </tr>
          </table>
        </div>

        <div>
          <table>
            <tr>
              <td>Холбогдох дугаар : </td>
              <td>{info.ContactNo}</td>
            </tr>
          </table>
        </div>

      </main>
    </div>
  )
}
