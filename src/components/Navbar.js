"use client";

// import { useRouter } from "next/navigation";
import Link from 'next/link'

function Navbar() {
  // const router = useRouter();
  // const navigate = (path) => router.push(path)
  return (
    <nav className="navbar">
      {/* Linking */}
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/login">Login</Link>

      {/* Navigation */}
      {/* <button onClick={() => navigate("/")}>Home</button> */}
      {/* <button onClick={() => navigate("/about")}>About</button> */}
      {/* <button onClick={() => navigate("/contact")}>Contact</button> */}
    </nav>
  );
}

export default Navbar;
