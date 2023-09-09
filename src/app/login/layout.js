"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation"

function layout({ children }) {

  const pathName = usePathname();

  return (
    <div>
      {

        pathName !== "/login/teacher" ?
          <nav className='navbar'>
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/login/student">Student Login</Link>
            <Link href="/login/teacher">Teacher Login</Link>
          </nav> :  null

      }

      {children}
    </div>
  )
}

export default layout