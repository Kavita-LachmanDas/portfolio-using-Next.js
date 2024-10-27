"use client";
import Image from 'next/image'
import React, { useEffect } from 'react'

import capture from "../public/capture.png"
import Typed from 'typed.js';
import { BsFacebook, BsFillStarFill, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import Link from 'next/link';

export default function Herooo() {
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
            <div className="main bg-black text-white h-screen flex flex-col lg:flex-row justify-center items-center my-10">
                <div className="text w-full lg:w-[600px] p-6 lg:p-9 text-center lg:text-left">
                    <h1 className='p-3 text-4xl font-extrabold font-serif'>Hello, It&apos;s Me <br /> kavita LachmanDas</h1>
                    <p className='hello p-2 text-4xl lg:text-6xl text-orange-200'>I&apos;m <span className="auto-type"></span></p>
                    <p className='text-gray text-sm shadow-white'>I&apos;m a passionate frontend web developer <br />
                        with expertise in HTML, CSS, Bootstrap, TypeScript, and modern frameworks like Next.js and Tailwind CSS. I create responsive, dynamic web applications focused on clean design and seamless user experience.
                    </p>

                    <button type="button" className='buttonn flex gap-4 justify-center m-6'>
                        <BsLinkedin />
                        <BsGithub />
                        <BsTwitter />
                        <BsFacebook />
                    </button>

                  <Link href="https://drive.google.com/file/d/1j-iaIbyVHGhTCv8LVDFkk47CM75VBvmM/view?usp=sharing" > <button className='bu text-center text-blue-800 border-2 border-blue-600 bg-slate-500 font-serif p-3 w-full lg:w-[200px] rounded-3xl text-xl m-4'>Hire Me</button></Link>
                </div>
                <div className="image w-full flex justify-center lg:justify-end">
                    <Image alt='hero' src={capture} width={500} height={500} className="max-w-full h-auto" />
                </div>
            </div>
        </div>
    )
}
