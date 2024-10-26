"use client"

import React, { useState } from "react";
import GlowRadi from "../global/glow";
import { RxCross2 } from "react-icons/rx";

function Banner({ title }) {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
      const handleSend = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('/api/sendemail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            alert('Email sent successfully');
          } else {
            alert('Failed to send email');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('There was an error submitting the form');
        }
      }
      const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
      }
    const [overlay, setOverlay] = useState(false);
  return (
    <div className="w-full sm:h-80 h-[35rem] relative py-6 flex justify-start gap-10 items-center flex-col">
      {
        overlay ? (
      <div className="absolute inset-0 z-30 w-full h-full bg-black/80 backdrop-blur-sm transition-all px-8">
        <div onClick={() => setOverlay(!overlay)} className="w-12 h-12 cursor-pointer bg-white absolute right-2 top-2 rounded-full flex justify-center items-center">
            <RxCross2 size={25}/>
        </div>
        <form className="w-full mt-6 sm:inline-block flex flex-col justify-start items-start">
          <input
            value={formData.name}
            name="name"
            onChange={(e) => handleChange(e)}
            required
            placeholder="Your name"
            className="bg-transparent sm:w-1/5 w-full outline-none pb-1 text-white placeholder:text-white/40 placeholder:font-light placeholder:font-mon p-2 border-b-2 border-solid border-white"
            type="text"
          />
          <input
            value={formData.email}
            name="email"
            onChange={(e) => handleChange(e)}
            required
            placeholder="email@gmail.com"
            className="bg-transparent sm:w-1/5 w-full outline-none pb-1 text-white placeholder:text-white/40 placeholder:font-light placeholder:font-mon p-2 border-b-2 border-solid border-white sm:ml-6 sm:mt-0 ml-0 mt-6"
            type="text"
          />
          <input
            value={formData.phone}
            name="phone"
            onChange={(e) => handleChange(e)}
            required
            placeholder="Your phone no."
            className="bg-transparent sm:w-1/5 w-full outline-none pb-1 text-white placeholder:text-white/40 placeholder:font-light placeholder:font-mon p-2 border-b-2 border-solid border-white sm:ml-6 sm:mt-0 ml-0 mt-6"
            type="text"
          />
          <textarea
              value={formData.message}
              name="message"
              onChange={(e) => handleChange(e)}
            required
            placeholder="How can we help you today?"
            className="resize-none sm:w-2/5 text-white h-[200px] bg-transparent w-full outline-none pb-1 placeholder:text-white/40 placeholder:font-light placeholder:font-mon p-2 border-b-2 border-solid border-white mt-8"
          ></textarea>
          <button
            onClick={(e) => {
              handleSend(e);
            }}
            className="sm:absolute relative sm:bottom-4 sm:right-96 mt-7 sm:mt-0 bg-white/20 text-white sm:w-[30%] w-full py-3 rounded-lg text-xl font-medium hover:scale-95 transition-transform font-mon text-center"
          >
            Let's Talk!
          </button>
        </form>
      </div>

        ) : (
            <></>
        )
      }

      <div className="absolute -top-12 -right-8">
        <GlowRadi stop_1={"#1c6beb50"} stop_2={"#87b5ff00"} />
      </div>
      <h1 className="text-6xl font-bold bg-gradient-to-br from-blue-500 to-blue-200 text-transparent bg-clip-text pb-4">
        {title}
      </h1>

      <button onClick={() => setOverlay(!overlay)} className="bg-blue-600/20 border border-blue-300 border-solid font-light rounded-full px-12 py-2 text-3xl text-blue-400 flex justify-center items-center gap-4 mb-2 hover:scale-90 transition duration-300 hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-300 hover:text-white">
        Let's get in touch
      </button>
    </div>
  );
}

export default Banner;
