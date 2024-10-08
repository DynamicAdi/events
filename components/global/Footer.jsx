import React from 'react'
import logo from "@/assets/logo.png";
import Image from 'next/image';
import { getPost } from '@/lib/calls';
import { urlFor } from '@/lib/image';
import Link from 'next/link';

async function Footer() {
    const posts = await getPost('connect');
    const tab = [
        {
          name: "Home",
          link: "/#home",
        },
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Contact",
          link: "/contact-us",
        },
        {
          name: "Services",
          link: "/#services",
        },
        {
          name: "Past Projects",
          link: "/#projects",
        },
        {
          name: "Blogs",
          link: "/#blogs",
        },
      ]
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
                {tab.map((item) => (

            <Link href={item.link} key={item.link}>
                <li className='font-pop w-fit text-xl mt-2 hover:text-primary hover:translate-x-5 cursor-pointer transition duration-200'>{item.name}</li>
                </Link>
                ))}
            </ul>
            </div>
            <div className="sm:w-1/3 w-full h-full p-4 sm:p-8 py-6">
            <h1 className='font-mon font-bold sm:text-4xl text-2xl mb-4 text-Secondary cursor-default'>Connect with us</h1>
            <ul>
                <a href={`tel:${posts[0].phone}`}>
                <li className='sm:text-xl text-base mt-2 underline cursor-pointer hover:text-primary transition-colors'>{posts[0].contactInformation.phone}</li>
                </a>
                <a href={`mailto:${posts[0].email}`}>
                <li className='sm:text-xl text-base mt-2 underline cursor-pointer hover:text-primary transition-colors'>{posts[0].contactInformation.email}</li>
                </a>
                {/* <li className='sm:text-xl text-base mt-2 underline cursor-pointer hover:text-primary transition-colors'>zyl5q@example.com</li> */}
                <li className='sm:text-xl text-base mt-2'>{posts[0].contactInformation.address}</li>

                <ul className='flex justify-start items-center gap-2 mt-2'>
                    {posts[0].socialMediaLinks.map((items, index) => (
                        <a href={items.link} target="_blank" rel="noopener noreferrer" key={index}>
                            <li className='w-12 h-12 cursor-pointer hover:scale-110 hover:text-white transition-all rounded-full'><img alt={items.link} src={urlFor(items.icon).url()} className='w-full h-full rounded-full object-cover'/></li>
                        </a>
                    ))}
                    
                    {/* <li className='cursor-pointer hover:bg-pink-600 hover:text-white transition-all bg-pink-600/20 p-3 rounded-full text-pink-600'><FaInstagram  size={30}/></li> */}
                    {/* <li className='cursor-pointer hover:bg-blue-400 hover:text-white transition-all bg-blue-400/20 p-3 rounded-full text-blue-400'><FaLinkedinIn size={30} /></li> */}
                </ul>
            </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer