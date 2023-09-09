"use client"

import Link from "next/link"

function page({params}) {

  return (
    <div className="mt-10 flex items-center flex-col gap-5">
        <h1 className='text-4xl font-bold text-center'>Student Details</h1>
        <h2 className="text-center text-3xl font-bold m-[20px]">Welcome <span className="text-red-600">{params.student}</span>  !!! <br />Nice to see you here 😊</h2>
        <Link href="/studentlist" className="bg-blue-600 px-3 py-3">Go back to StudentList Page</Link>
    </div>
  )
}

export default page