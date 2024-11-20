"use client";

import React, { useState } from "react";
// import { FaGripLines } from "react-icons/fa6";
import { MdOutlineSort } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";

function Icon() {
  const [open, setOpen] = useState(true);

  const tab = [
    {
      name: "Home",
      link: "/",
      new: true,
    },
    {
      name: "About",
      link: "/about",
      new: false,
    },
    {
      name: "Past Projects",
      link: "/projects",
      new: false,
    },
    {
      name: "Services",
      link: "/services",
      // target: scrollToServices,
      new: true,
    },
    {
      name: "Blogs",
      link: "/blogs",
      new: false,
    },
    {
      name: "Contact us",
      link: "/contact-us",
      new: false,
    },
  ];
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
        staggerChildren: 0.4,
      },
    },
  };

  const items = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="fixed sm:top-2 sm:right-4 top-3 right-10 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex justify-center items-center cursor-pointer"
      >
        {open ? (
          <MdOutlineSort
            className="cursor-pointer text-white"
            size={28}
          />
        ) : (
          <IoCloseOutline color="white" size={28} />
        )}
      </div>

      <div
        className={`${open ? "h-0 opacity-0 w-0" : "h-full sm:w-1/3 w-[30rem] opacity-100"} transition-all fixed top-0 bg-blue-950/60 backdrop-blur-sm`}
      >
        <div className="w-full h-5/6 mt-4 p-4 pr-60 flex justify-end text-right items-center">
          <ul>
            {tab.map((item, index) => (
              <Link
                href={item.link}
                key={index}
              >
                <li
                  className="hover:-translate-x-8 hover:scale-110 transition-all text-3xl text-white font-light cursor-pointer mt-5"
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Icon;
