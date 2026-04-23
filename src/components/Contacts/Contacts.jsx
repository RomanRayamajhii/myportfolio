import React from 'react'
import "../../index.css"

const Contacts = () => {
  return (
    <div id="contact" className=' scroll-mt-24 min-h-screen flex flex-col items-center justify-center px-6 md:px-20 mt-20 ' >
    <h1 className='text-4xl font-bold mb-6  text-gray-700'>Contact Me</h1>
    <form action="post" className='flex flex-col gap-4 w-full max-w-md'>
    <input type="text" placeholder='Your Name' className='border border-gray-700 rounded-md p-3 mb-4 w-full' />
    <input type="email" placeholder='Your Email' className='border border-gray-700 rounded-md p-3 mb-4 w-full' />
    <textarea placeholder='Your Message' className='border border-gray-700 rounded-md p-3 mb-4 w-full h-32'></textarea>
    <button type="submit" className='bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all'>Send Message</button>
</form>



      
    </div>
  )
}

export default Contacts
