import React from 'react'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <nav className='bg-purple-800 h-20 flex items-center'>
                <ul className='flex items-center gap-10'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>
            </nav>
            {children}
        </>
    )
}