import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div>
      <header className="text-white body-font bg-black">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl text-white font-serif">Kavita</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center  justify-center text-xl">
            <Link href="/" className="mr-5 hover:text-white nav-link nav-link-ltr ">Home</Link>
            <Link href="/routes/about" className="mr-5 hover:text-white nav-link nav-link-ltr">About</Link>
            <Link href="/routes/skiill" className="mr-5 hover:text-white nav-link nav-link-ltr">Skills</Link>
            <Link href="/routes/project" className="mr-5 hover:text-white nav-link nav-link-ltr">Projects</Link>
            <Link href="/routes/contact" className="mr-5 hover:text-white nav-link nav-link-ltr">Contact</Link>
          </nav>
        <Link href="https://drive.google.com/file/d/1j-iaIbyVHGhTCv8LVDFkk47CM75VBvmM/view?usp=sharing">  <button className="inline-flex items-center bg-gray-100 text-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-base mt-4 md:mt-0">
            My CV
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> </Link>
        </div>
      </header>

     
    </div>
  );
}
