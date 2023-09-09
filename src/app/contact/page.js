"use client";

import { useRouter } from "next/navigation"

function page() {
  const router = useRouter();
  const navigate = (path) => router.push(path)

  return (
    <>
      <h1 className='font-bold text-4xl text-center text-white mt-6'>This is our Contact Page</h1>
      <h2 className="font-bold text-3xl text-center text-white mt-10">Navigate to these Pages : </h2>
      <div className="flex justify-center items-center mt-5">
        <button className="bg-blue-600 px-5 py-3 mr-4" onClick={() => navigate("/")}>Home</button>
        <button className="bg-blue-600 px-5 py-3 mr-4" onClick={() => navigate("/about")}>About</button>
        <button className="bg-blue-600 px-5 py-3 mr-4" onClick={() => navigate("/contact")}>Contact</button>
        <button className="bg-blue-600 px-5 py-3 mr-4" onClick={() => navigate("/login")}>Login</button>
      </div>
    </>
  )
}

export default page