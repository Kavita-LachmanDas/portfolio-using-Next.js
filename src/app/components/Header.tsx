// import Link from 'next/link';
// import React from 'react';

// export default function Header() {
//   return (
//     <div>
//       <header className="text-white body-font bg-black">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//             <span className="ml-3 text-2xl text-white font-serif">Kavita</span>
//           </a>
//           <nav className="md:ml-auto flex flex-wrap items-center  justify-center text-xl">
//             <Link href="/" className="mr-5 hover:text-white nav-link nav-link-ltr ">Home</Link>
//             <Link href="/routes/about" className="mr-5 hover:text-white nav-link nav-link-ltr">About</Link>
//             <Link href="/routes/skiill" className="mr-5 hover:text-white nav-link nav-link-ltr">Skills</Link>
//             <Link href="/routes/project" className="mr-5 hover:text-white nav-link nav-link-ltr">Projects</Link>
//             <Link href="/routes/contact" className="mr-5 hover:text-white nav-link nav-link-ltr">Contact</Link>
//           </nav>
//         <Link href="https://drive.google.com/file/d/1j-iaIbyVHGhTCv8LVDFkk47CM75VBvmM/view?usp=sharing">  <button className="inline-flex items-center bg-gray-100 text-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-base mt-4 md:mt-0">
//             My CV
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="w-4 h-4 ml-1"
//               viewBox="0 0 24 24"
//             >
//               <path d="M5 12h14M12 5l7 7-7 7"></path>
//             </svg>
//           </button> </Link>
//         </div>
//       </header>

     
//     </div>
//   );
// }

'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { BsArrow90DegLeft, BsArrow90DegRight } from 'react-icons/bs';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="text-white body-font bg-black">
        <div className="container mx-auto flex p-5 items-center justify-between">
          {/* Logo */}
          <a className="title-font font-medium items-center text-gray-900 flex">
            <span className="ml-3 text-2xl text-white font-serif">Kavita</span>
          </a>

          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white inline-flex items-center justify-center p-2 rounded-md md:hidden focus:outline-none"
          >
            {/* Icon */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-5 text-xl">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/routes/about" className="hover:text-white">About</Link>
            <Link href="/routes/skill" className="hover:text-white">Skills</Link>
            <Link href="/routes/project" className="hover:text-white">Projects</Link>
            <Link href="/routes/contact" className="hover:text-white">Contact</Link>

            {/* CV Button */}
            <Link href="https://drive.google.com/file/d/1j-iaIbyVHGhTCv8LVDFkk47CM75VBvmM/view?usp=sharing">
              <button className="font-sans bg-gray-100 text-black border-0 py-1 px-3 focus:outline-none  hover:bg-gray-600 rounded">
                My CV 
          
              </button>
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation Links */}
        {isOpen && (
          <nav className="flex flex-col items-center space-y-4 mt-4 md:hidden text-xl">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/routes/about" className="hover:text-white">About</Link>
            <Link href="/routes/skill" className="hover:text-white">Skills</Link>
            <Link href="/routes/project" className="hover:text-white">Projects</Link>
            <Link href="/routes/contact" className="hover:text-white">Contact</Link>

            {/* CV Button */}
            <Link href="https://drive.google.com/file/d/1j-iaIbyVHGhTCv8LVDFkk47CM75VBvmM/view?usp=sharing">
              <button className="bg-gray-100 text-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded">
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
              </button>
            </Link>
          </nav>
        )}
      </header>
    </div>
  );
}
