import React from 'react'
import image from "../../assets/roman.jpeg"
import Github from "../../assets/github.png"
import Linkedin2 from "../../assets/linkedin2.png"

import { FileText } from 'lucide-react';

const Home = () => {
  return (
    <div id="home" className="min-h-screen flex md:flex-row flex-col items-center justify-center gap-10 md:gap-20 px-6 md:px-20 py-10 md:py-20">
        {/* profile picture */}
        <div className='mb-6 md:mb-0 md:mr-10  flex-shrink-0 '>
            <img src={image} alt="Profile" className='w-48 h-48 rounded-full  object-cover border-4 border-gray-300 hover:scale-105 transition duration-300' />
        </div>
        {/* introduction */}
        <div className='text-center md:text-left max-w-lg'>
            <h1 className='text-4xl font-bold mb-4 text-gray-700 '>Hi, I'm Roman Rayamajhi</h1>
            <p className="text-gray-500 mb-6">
        Full Stack Developer | React, Next.js, Node.js | Creating modern, responsive, and interactive web applications.
      </p>
            <a href="#contact" className='inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all'>Contact Me</a>
         <div className="flex justify-center md:justify-start gap-4 mt-5">
        <a href="https://www.linkedin.com/in/roman-rayamajhi-4a6986289/" class="hover:text-teal-400 text-lg transition flex gap-1">
<img src={Linkedin2} alt="LinkedIn" className="w-6 h-6" />
            LinkedIn</a>

        <a href="https://github.com/RomanRayamajhii" className="hover:text-teal-400 text-lg transition flex gap-1">
             <img src={Github} alt="GitHub" className="w-6 h-6" />
             GitHub</a>
        <a href="#" className="hover:text-teal-400 text-lg transition flex gap-1">
            <FileText/>
            Resume</a>
      </div>
        </div>
        
    </div>
  )
}

export default Home
