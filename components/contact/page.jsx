"use client"
import React from "react";
import Navbar from "../global/navbar/Navbar";
import {
  IoCallOutline,
  IoChatbubblesOutline,
  IoLocationOutline,
} from "react-icons/io5";

function Contact() {
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
  return (
    <div className="w-full sm:h-screen h-auto flex justify-between bg-gray-100 pb-10 items-center flex-col">
      <Navbar />
      <div className="sm:w-3/4 sm:h-5/6 h-auto w-[95%] bg-white shadow-xl rounded-3xl border-2 border-primary border-solid sm:p-4 py-4 px-0">
        <div className="w-full h-full flex justify-between items-center flex-col-reverse sm:flex-row">
          <div className="sm:w-2/6 w-full h-full p-2 flex flex-col gap-2">
            <div className="w-full h-1/4 p-3 rounded-2xl flex gap-2">
              <div className="h-full w-auto mt-1 flex justify-start items-start">
                <IoChatbubblesOutline size={30} />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="font-mon font-bold text-3xl">Chat with us</h1>
                <p className="font-light text-[12px] text-gray-400">
                  our friendly team is there to help
                </p>
                <a
                  href="mailto:"
                  className="font-mon font-light text-base text-blue-800"
                >
                  xyz@gmail.com
                </a>
              </div>
            </div>
            <div className="w-full h-1/4 p-3 rounded-2xl flex gap-2">
              <div className="h-full w-auto mt-1 flex justify-start items-start">
                <IoLocationOutline size={30} />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="font-mon font-bold text-3xl">Visit us</h1>
                <p className="font-light text-[12px] text-gray-400">
                  Come and say hello to us
                </p>
                <a
                  href="mailto:"
                  className="font-mon font-light text-base text-black"
                >
                  nukar wali gali, pan wali dukan ke pass, jammu
                </a>
              </div>
            </div>
            <div className="w-full h-1/4 p-3 rounded-2xl flex gap-2">
              <div className="h-full w-auto mt-1 flex justify-start items-start">
                <IoCallOutline size={30} />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="font-mon font-bold text-3xl">Call us</h1>
                <p className="font-light text-[12px] text-gray-400">
                  Mon-Fri from 8am - 5pm
                </p>
                <a
                  href="tel:"
                  className="font-mon font-light text-base text-blue-800"
                >
                  +91 908634xxxx
                </a>
              </div>
            </div>
          </div>
          <div className="sm:w-10/12 w-[95%] sm:h-full h-auto bg-primary rounded-2xl p-4 text-white relative">
            <h1 className="font-dm font-semibold text-5xl">Got Queries?</h1>
            <h1 className="font-mon font-light mt-1 text-xl">
              No problem, we would love to help!
            </h1>
            <form className="mt-6 sm:inline-block flex flex-col justify-start items-start">
              <input
                value={formData.name}
                name="name"
                onChange={(e) => handleChange(e)}
                required
                placeholder="Dev Adarsh pandit"
                className="bg-transparent outline-none pb-1 placeholder:text-white/40 placeholder:font-light placeholder:font-mon p-2 border-b-2 border-solid border-white"
                type="text"
              />
              <input
                value={formData.email}
                name="email"
                onChange={(e) => handleChange(e)}
                required
                placeholder="xyz@gmail.com"
                className="bg-transparent outline-none pb-1 placeholder:text-white/40 placeholder:font-light placeholder:font-mon p-2 border-b-2 border-solid border-white sm:ml-6 sm:mt-0 ml-0 mt-6"
                type="text"
              />
              <input
                value={formData.phone}
                name="phone"
                onChange={(e) => handleChange(e)}
                required
                placeholder="+91 908634xxxx"
                className="bg-transparent outline-none pb-1 placeholder:text-white/40 placeholder:font-light placeholder:font-mon p-2 border-b-2 border-solid border-white sm:ml-6 sm:mt-0 ml-0 mt-6"
                type="text"
              />
              <textarea
              value={formData.message}
              name="message"
              onChange={(e) => handleChange(e)}
              required placeholder="Tell us about your queries in details" className="resize-none w-full h-[200px] bg-transparent outline-none pb-1 placeholder:text-white/40 placeholder:font-light placeholder:font-mon p-2 border-b-2 border-solid border-white mt-8"></textarea>
              <button onClick={(e) => {handleSend(e)}} className="sm:absolute relative sm:bottom-4 mt-7 sm:mt-0 bg-white text-primary sm:w-[95%] w-full py-3 sm:left-5 rounded-lg text-3xl font-medium hover:scale-95 transition-transform font-mon text-center">Let's Talk!</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
