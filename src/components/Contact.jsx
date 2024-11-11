import React from 'react'

function Contact() {
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
       <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact
        <span className="underline underline-offset-4 decoration-1 under font-light">
          with Us
        </span>
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-80 mx-auto">
        Ready to make a move? Let's Build Your Future Together
      </p>
      <form action="" className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
                Your Name
            <input 
            className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
            type="text"
            name="Name" id="name" placeholder='Enter Your Name' required />
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>
                Your Email
            <input 
            className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
            type="email"
            name="Name" id="name" placeholder='Enter Your Email' required />
            </div>
        </div>
        <div>
            Message 
            <textarea 
            className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
            name="Message" placeholder='Enter message' required></textarea>
        </div>
        <button className='bg-blue-700 text-white py-2 px-12 mb-16 mt-4 rounded'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact