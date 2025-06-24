"use client"
import Link from "next/link"
export default function Header(){
    return(
        <header className="w-full py-4 px-6 bg-white shadow-md fixed top-0 z-50">
            <nav className="max-w-6x1 mx-auto flex justify-between items-center">
              <h1 className="text-x1 font-bold text-blue-600">Barsha Saha</h1>
              <ul className="flex space-x-6 text-gray-700 font-midium">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>

        </header>
    )
}