import React from 'react'
import logo from "@/assets/logo.png";
import Image from 'next/image';
import {FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa6"

function Footer() {
  return (
    <div className='w-full sm:h-96 h-full p-6 sticky top-0'>
        <div className="w-full h-full bg-gray-200 rounded-3xl flex justify-between items-start flex-col sm:flex-row">
            <div className="sm:w-1/3 w-full h-full p-4 sm:p-8 py-6">
            <div className="w-2/5 h-2/5">
                <Image src={logo} className='drop-shadow-xl' alt='logo' objectFit='cover' />
            </div>
            <div className="content">
                <p className='font-mon font-medium mt-4 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eligendi facere excepturi nisi facilis pariatur beatae! Animi tempore ducimus velit non cumque. Quam quidem odit, cum vitae corporis quod distinctio.</p>
            </div>
            </div>
            <div className="sm:w-1/3 w-full h-full p-4 sm:p-8 py-6">
            <ul>
                <h1 className='font-mon font-bold sm:text-4xl text-2xl mb-4 text-Secondary cursor-default'>Quick Links</h1>
                <li className='font-pop w-fit text-xl mt-2 hover:text-primary hover:translate-x-5 cursor-pointer transition duration-200'>Home</li>
                <li className='font-pop w-fit text-xl mt-2 hover:text-primary hover:translate-x-5 cursor-pointer transition duration-200'>About</li>
                <li className='font-pop w-fit text-xl mt-2 hover:text-primary hover:translate-x-5 cursor-pointer transition duration-200'>Contact</li>
                <li className='font-pop w-fit text-xl mt-2 hover:text-primary hover:translate-x-5 cursor-pointer transition duration-200'>Past Projects</li>
                <li className='font-pop w-fit text-xl mt-2 hover:text-primary hover:translate-x-5 cursor-pointer transition duration-200'>Blogs</li>
            </ul>
            </div>
            <div className="sm:w-1/3 w-full h-full p-4 sm:p-8 py-6">
            <h1 className='font-mon font-bold sm:text-4xl text-2xl mb-4 text-Secondary cursor-default'>Connect with us</h1>
            <ul>
                <li className='sm:text-xl text-base mt-2 underline cursor-pointer hover:text-primary transition-colors'>+91 9086345xxx</li>
                <li className='sm:text-xl text-base mt-2 underline cursor-pointer hover:text-primary transition-colors'>zyl5q@example.com</li>
                <li className='sm:text-xl text-base mt-2'>2465 Hempstead Turnpike, East Meadow NY 11554</li>

                <ul className='flex justify-start items-center gap-4 mt-4'>
                    <li className='cursor-pointer hover:bg-blue-600 hover:text-white transition-all bg-blue-600/20 p-3 rounded-full text-blue-600'><FaFacebookF  size={28}/></li>
                    <li className='cursor-pointer hover:bg-pink-600 hover:text-white transition-all bg-pink-600/20 p-3 rounded-full text-pink-600'><FaInstagram  size={30}/></li>
                    <li className='cursor-pointer hover:bg-blue-400 hover:text-white transition-all bg-blue-400/20 p-3 rounded-full text-blue-400'><FaLinkedinIn size={30} /></li>
                </ul>
            </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer