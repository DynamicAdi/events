"use client";


import React, { useState } from "react";
import { FaGripLines } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import {motion} from "framer-motion"
import Link from "next/link";

function Icon() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  }
  const tab = [
    {
      name: "Home",
      link: "/",
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
      link: "#services",
    },
    {
      name: "Past Projects",
      link: "#projects",
    },
    {
      name: "Blogs",
      link: "#blogs",
    },
  ]
  const container = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.4 
      }
    }
  }

  const items = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <>
    <div onClick={toggle} className="relative z-20 w-10 h-10 sm:w-12 sm:h-12 bg-gray-500 rounded-full flex justify-center items-center cursor-pointer">
      <FaGripLines className="cursor-pointer text-white rotate-180" size={28} />
    </div>
    <div className={`fixed right-0 z-30 w-5/6 sm:w-[25%] h-screen top-0 bg-gray-200 ${open ? "translate-x-0" : "translate-x-96"} transition-all`}>
      
      <div className="w-full h-20 flex justify-end items-end flex-col gap-4 p-2 px-8">
        <div onClick={toggle} className="w-12 h-12 rounded-full flex cursor-pointer justify-center items-center bg-gray-700">
          <IoCloseOutline color="white" size={28} />
        </div>
      </div>
       
        <div className="w-full h-5/6 mt-4 p-4 pr-6 flex justify-start items-center">
        <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        >
{
tab.map((item, index) => (  
        <Link href={item.link} key={index}>
          <motion.li 
          initial="hidden"
          whileInView={"show"}
          variants={items}
          className="text-4xl hover:text-primary hover:scale-105 hover:font-regular font-light transition-all cursor-pointer mt-5">{item.name}</motion.li>
        </Link>
))
}

        </motion.ul>
        </div>
    </div>
    </>
  );
}

export default Icon;
