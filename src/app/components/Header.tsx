import Link from "next/link"

const Header = () => {
    return (
        <nav className='bg-purple-800 h-20 flex items-center'>
            <ul className='flex items-center gap-10'>
                <li className='cursor-pointer'>
                    <Link href="/">Home</Link>    
                </li>
                <li className='cursor-pointer'>
                    <Link href="/about">About</Link>    
                </li>
            </ul>
        </nav>
    )
}

export default Header