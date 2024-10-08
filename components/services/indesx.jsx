"use client";

import React from "react";
import Title from "../global/Title";
import {motion, useScroll, useTransform} from "framer-motion";
import { urlFor } from "@/lib/image";

function DesktopServices({data}) {

  const {scrollYProgress} = useScroll();
  const opacity = useTransform(scrollYProgress, [0.7, 0.85], [1, 0]);
  return (
    <motion.div className="w-screen h-screen sticky top-0" id="services" style={{opacity}}>
      <div className="w-full h-24 pr-8 flex justify-between">
        <Title title={"Services"} smallPhrase={true} />
        <div className="py-4">
          {/* <Icon /> */}
        </div>
      </div>

      <div className="absolute inset-0 w-full h-[100%] p-6 px-0 flex justify-between items-start">
      <div className="relative w-[500px] h-[690px] group">
      <svg
        width="500"
        height="690"
        viewBox="0 0 590 1000"
        className="relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Define the clipping path inside SVG */}
        <defs>
          <clipPath id="clipPath">
            <path
              d="M0 168C0 140.386 22.3858 118 50 118H308.69C335.231 118 357.147 97.2625 358.613 70.7617L359.887 47.7382C361.353 21.2375 383.269 0.5 409.81 0.5H535.812C563.694 0.5 586.189 23.3041 585.808 51.1828L573.674 939.683C573.3 967.028 551.026 989 523.678 989H50C22.3857 989 0 966.614 0 939V168Z"
            />
          </clipPath>
        </defs>
        <path
          d="M0 168C0 140.386 22.3858 118 50 118H308.69C335.231 118 357.147 97.2625 358.613 70.7617L359.887 47.7382C361.353 21.2375 383.269 0.5 409.81 0.5H535.812C563.694 0.5 586.189 23.3041 585.808 51.1828L573.674 939.683C573.3 967.028 551.026 989 523.678 989H50C22.3857 989 0 966.614 0 939V168Z"
          fill="#D9D9D9"
          clipPath="url(#clipPath)"
        />

        <image
          href={urlFor(data[0].image).url()} // Dynamic image URL
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#clipPath)"
          className="absolute inset-0 transition-all duration-300 z-50"
        />
                <rect
          width="100%"
          height="100%"
          fill="url(#grad1)"
          clipPath="url(#clipPath)"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="grad1" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" style={{ stopColor: "#000000", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "transparent", stopOpacity: 0 }} />
          </linearGradient>
        </defs>
      </svg>
      <h2 className="absolute inset-8 left-24 flex items-end justify-start text-white text-3xl font-pop font-bold opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-95 transition-all duration-300 z-30">
        {data[0].title}
      </h2>
    </div>


        <div className="w-[70%] h-[100%] relative flex justify-start items-start flex-col gap-4 pr-4">
          <div className="h-[55%] w-full flex justify-start items-start">
            <div className="h-full w-1/2 flex justify-start pr-6 items-start flex-col gap-4">
              <div className="cursor-pointer group overflow-hidden relative w-full h-[50%] rounded-3xl bg-gray-300 flex justify-start items-start gap-4">
                <div className="flex justify-start p-4 items-end text-white absolute w-full h-full bg-gradient-to-t transition-all from-black/60 to-transparent translate-y-full group-hover:translate-y-0">
                <h2 className="text-3xl font-pop font-bold">Services name</h2>
                </div>
                <img
                  src="https://picsum.photos/600"
                  alt="project"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="cursor-pointer group overflow-hidden relative w-full h-[46%] rounded-3xl bg-gray-300 flex justify-start items-start gap-4">
                <div className="flex justify-start p-4 items-end text-white absolute w-full h-full bg-gradient-to-t transition-all from-black/60 to-transparent translate-y-full group-hover:translate-y-0">
                <h2 className="text-3xl font-pop font-bold">Services name</h2>
                </div>
                <img
                  src="https://picsum.photos/400"
                  alt="project"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
            <div className="w-1/2 h-full overflow-hidden bg-slate-700 rounded-3xl relative group cursor-pointer">
              <div className="absolute right-2 -top-4 w-16 h-16 bg-white rounded-full"></div>
              <div className="flex justify-start p-4 items-end text-white absolute w-full h-full bg-gradient-to-t transition-all from-black/60 to-transparent translate-y-full group-hover:translate-y-0">
              <h2 className="text-3xl font-pop font-bold">Services name</h2>
              </div>
              <img
                src="https://picsum.photos/700"
                alt="project"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>

          <div className="w-full h-2/5 rounded-3xl flex justify-start items-start gap-4">
            <div className="cursor-pointer group overflow-hidden relative w-2/6 h-full bg-slate-700 rounded-3xl">
              <div className="flex justify-start p-4 items-end text-white absolute w-full h-full bg-gradient-to-t transition-all from-black/60 to-transparent translate-y-full group-hover:translate-y-0">
              <h2 className="text-3xl font-pop font-bold">Services name</h2>
              </div>
              <img
                src="https://picsum.photos/800"
                alt="project"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="cursor-pointer group overflow-hidden relative w-2/5 h-full bg-slate-700 rounded-3xl">
              <div className="flex justify-start p-4 items-end text-white absolute w-full h-full bg-gradient-to-t transition-all from-black/60 to-transparent translate-y-full group-hover:translate-y-0">
              <h2 className="text-3xl font-pop font-bold">Services name</h2>
              </div>
              <img
                src="https://picsum.photos/900"
                alt="project"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="cursor-pointer group overflow-hidden relative w-1/4 h-full bg-slate-700 rounded-3xl">
              <div className="flex justify-start p-4 items-end text-white absolute w-full h-full bg-gradient-to-t transition-all from-black/60 to-transparent translate-y-full group-hover:translate-y-0">
              <h2 className="text-3xl font-pop font-bold">Services name</h2>
              </div>
              <img
                src="https://picsum.photos/1000"
                alt="project"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DesktopServices;
