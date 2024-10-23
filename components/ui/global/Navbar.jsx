"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
function SideBar({
  scrollToHome,
  scrollToAbout,
  scrollToProjects,
  scrollToServices,
  scrollToBlog,
}) {
  const tabs = [
    {
      name: "Home",
      link: "/",
      target: scrollToHome,
    },
    {
      name: "About",
      link: "/about",
      new: true,
    },
    {
      name: "Past Projects",
      link: "/#projects",
      target: scrollToProjects,
    },
    {
      name: "Services",
      link: "/#services",
      target: scrollToServices,
    },
    {
      name: "Blogs",
      link: "/#blogs",
      target: scrollToBlog,
    },
    {
      name: "Contact us",
      link: "/contact-us",
      new: true,
    },
  ];
  const [active, setActive] = useState(tabs[0].name);
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`w-full ${open ? "h-full" : "h-0"} transition-all sm:h-[14%] flex justify-end sm:items-end items-start fixed inset-0 z-50 sm:bg-transparent bg-black/60 sm:backdrop-blur-none backdrop-blur-sm`}
    >
      <nav className="w-full h-20 relative">
        <div
          className="cursor-pointer sm:hidden w-10 h-10 bg-white/40 transition-all backdrop-blur-sm absolute z-50 sm:right-14 sm:top-4 right-7 top-7 rounded-full flex justify-center items-center text-white"
          onClick={toggle}
        >
          {open ? <RxCross2 size={28} /> : <RxHamburgerMenu size={28} />}
        </div>
        <ul className={`${open ? "opacity-100 z-30 w-full" : "opacity-0 -z-20 w-0 sm:opacity-100 sm:z-50 sm:w-full"} transition-all relative w-full flex justify-end p-6 pr-28 text-white gap-10 flex-col sm:flex-row`}>
        {tabs.map((items, index) => (
  <li 
    key={index} 
    onClick={() => {
      setActive(items.name)
      if (items.target) {
        items.target();
      }
    }}
    className={`cursor-pointer text-2xl transition-all hover:scale-110 hover:opacity-100 font-pop font-extralight ${active === items.name ? "opacity-100" : "opacity-60"}`}
  >
    {items.new ? (
      <Link href={items.link}>{items.name}</Link>
    ) : (
      items.name
    )}
  </li>
))}
</ul>
      </nav>
    </div>
  );
}

export default SideBar;
