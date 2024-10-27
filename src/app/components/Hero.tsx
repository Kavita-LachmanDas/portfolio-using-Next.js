"use client";
import Image from 'next/image'
import React, { useEffect } from 'react'


import Typed from 'typed.js';
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import Link from 'next/link';
export default function Hero() {
    
    useEffect(() => {
        // Initialize Typed.js after the component mounts
        const typed = new Typed(".auto-type", {
            strings: ["programmer", "web Designer", "Frontend web developer"],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true,
        });

        // Cleanup function to destroy the Typed instance when the component unmounts
        return () => {
            typed.destroy();
        };
    }, []); // Empty dependency array to run this effect only once on mount




    return (
        <div>
            <div className='bg-black m-0 p-0 w-100 h-screen'>
            <div className="main bg-black text-white h-screen w-100 flex justify-center ">
                <div className="text text-white  w-[600px] p-9 text-4xl my-[100px]">
                 <h1 className='p-3 text-4xl font-extrabold font-serif '>Hello, It&apos;s Me <br /> kavita LachmanDas</h1>
                 <p className='hello p-2 text-6xl text-orange-200'>I&apos;m <span className="auto-type"></span></p> 
                 <p className='text-gray text-sm shadow-white my-4 text-gray-400'>I&apos;m a passionate frontend web developer <br />
                 with expertise in HTML, CSS, Bootstrap, TypeScript, and modern frameworks like Next.js and Tailwind CSS. I create responsive, dynamic web applications focused on clean design and seamless user experience.


                 </p>
         
        <button type="button" className='buttonn flex gap-4 m-6'>
      <Link href="https://www.linkedin.com/in/kavita-luhana-0a31842ab/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BqDGqoSUgTBCSHMvrMgagTw%3D%3D"><BsLinkedin/></Link>
      <Link href="https://github.com/Kavita-LachmanDas">  <BsGithub/></Link>
      <Link href="/"> <BsTwitter/></Link>
      <Link href="/"> <BsFacebook/></Link>
    
      </button>

 <Link href="https://drive.google.com/file/d/1j-iaIbyVHGhTCv8LVDFkk47CM75VBvmM/view?usp=sharing"> <button className='bu text-center text-blue-800 border-2 outline-blue-600 bg-slate-500 font-serif p-3 w-[200px] rounded-3xl text-xl m-4'>Hire Me</button></Link>  
                </div>
                <div className="image my-[100px]">
<Image alt='hero' src="/capture.png" width={500} height={500}/>
                </div>
            </div>
        </div>

        </div>

    )
}


