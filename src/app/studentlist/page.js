"use client"
import Link from 'next/link'
import React from 'react'

function page() {

    const names = ["Remo","Harsh","Ram","Shyam"]

  return (
    <div className='mt-10'>
        <h1 className='text-4xl font-bold text-center'>Student List</h1>
        <ul className='flex items-center justify-center gap-5 mt-[50px]'>
            <li>
                
            </li>

            {
                names.map((name,id) => (
                    <li key={id}>
                        <Link className='bg-red-600 px-4 py-3 rounded-md' 
                        href={`/studentlist/${name}`}>{name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default page