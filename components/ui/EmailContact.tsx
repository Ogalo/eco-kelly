'use client'
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';



const emailContact = () => {

  const [state, setState] = useState({ name: "", email: "", message: "" });


  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setState({ name: "",email: "", message: "" });


    emailjs.sendForm('service_xayutul', 'template_uj037fm', e.currentTarget,  'Vviy6r61qY1nNI-xw')
      .then((e) => {
          alert('message sent successfully')



      }, (error) => {
          alert(error.message)
      });
  };
  return (
    <div className='flex'>
      <div className='w-full lg:w-[80%] block'>

        <form className='w-full block' onSubmit={sendEmail}>
        <h1 className="text-2xl font-semibold text-black">Need Assistance</h1>
        <p className="text-sm font-semibold text-black mb-6">Let us help you book your next trip. Our agents will be in touch shortly.</p>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="name">
            Enter your name
          </label>
          <input
            className="w-full p-3 text-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={state.name}
            onChange={(e) => {
              setState({ ...state, name: e.target.value });
            }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-3 text-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={state.email}
            onChange={(e) => {
            setState({ ...state, email: e.target.value });
          }}

          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="message">
            Enter your message
          </label>
          <textarea
            className="w-full p-3 text-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
            id="message"
            name="message"
            rows={4}
            placeholder="Your Message"
            value={state.message}
            onChange={(e) => {
            setState({ ...state, message: e.target.value });
        }}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#ff7b24] text-white py-3 rounded-lg hover:bg-orange-100 focus:outline-none"
        >
          LET'S TALK
        </button>

        </form>

      </div>
    </div>
  )
}

export default emailContact
