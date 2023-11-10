import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <div className="bg-teal-950 p-20 text-white font-bold text-2xl">
        <Link href="/login/page">page.tsx</Link>
      </div>
      <div className="bg-teal-950 p-20 text-white font-bold text-2xl">
        <Link href="/pages/homepage">homepage.tsx</Link>
      </div>
      <div className="bg-teal-950 p-20 text-white font-bold text-2xl">
        <Link href="/pages/login">login.tsx</Link>
      </div>
      <div className="bg-teal-950 p-20 text-white font-bold text-2xl">
        <Link href="/">register.tsx</Link>
      </div>
    </main>

  )
}
