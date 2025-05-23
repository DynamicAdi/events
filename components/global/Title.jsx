"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Title({ title, smallPhrase }) {
  const [mobile, setMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 700) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    // Set the initial screen size
    handleResize();

    // Add event listener for resizing
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center items-center relative">
      {/* <svg
        width={`${mobile ? 250 : smallPhrase ? 350 : 487}`}
        height="220"
        viewBox={`0 0 477 ${mobile ? 120 : smallPhrase ? 140 : 100}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H476.5H434C406.386 0 384 22.3858 384 50V62.5C384 90.1142 361.614 112.5 334 112.5H50C22.3858 112.5 0 134.886 0 162.5V197.5V0Z"
          fill="#232323"
        />
      </svg> */}
      {/* <div className="w-full h-16 bg-red-400"> */}
      <h1
        className={`text-2xl sm:text-5xl w-max p-6 rounded-br-[1.8rem] rounded-tr-3xl pr-12 font-bold bg-gray-900 text-white font-pop`}>
        {title.split("").map((letter, index) => (
          <motion.span
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="letter"
            key={index}
            >
            {letter}
          </motion.span>
        ))}
      </h1>
        {/* </div> */}
    </div>
  );
}

export default Title;
