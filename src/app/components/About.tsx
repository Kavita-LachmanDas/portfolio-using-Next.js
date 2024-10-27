import Image from 'next/image'
import React from 'react'
// import about from '../public/about.webp'
import Link from 'next/link'

export default function About() {
  return (
    <div>
        <section className="sec text-gray-600 body-font bg-black">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image className="rounded-[50%] lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center" alt="hero" src="/about.webp" width={300} height={300}/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="fontt title-font sm:text-4xl text-3xl mb-4 font-medium text-white">About Me</h1>
      <p className="mb-8 leading-relaxed text-white">
     
Hello! I&apos;m Kavita LachmanDas, <br /> a passionate frontend web developer with a keen eye for design and detail. My journey in web development began with a fascination for creating interactive user experiences. With expertise in HTML, CSS, and JavaScript, I enjoy transforming ideas into beautifully functional websites. I thrive on learning new technologies and keeping up with industry trends, especially frameworks like Next.js and Tailwind CSS.

In my projects, I focus on responsive design and seamless user interactions to ensure an engaging experience across devices. I believe that clean code and strong user experience are the foundations of any successful application. When I'm not coding, you can find me exploring the latest design trends or experimenting with new programming languages. I&apos;m excited to connect with like-minded professionals and collaborate on innovative projects. Let&apos;s create something amazing together!

</p>
      <div className="flex justify-center">
     <Link href="https://drive.google.com/file/d/1j-iaIbyVHGhTCv8LVDFkk47CM75VBvmM/view?usp=sharing">  <button className="inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-purple-400 rounded text-lg ">My Resume</button></Link>

      </div>
    </div>
  </div>
</section>
    </div>
  )
}
