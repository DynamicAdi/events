import React from 'react'
import {GoArrowUpRight} from "react-icons/go";
import logo from "@/assets/model.png";
import Image from 'next/image';
import { urlFor } from '@/lib/image';

function PastProjectCards({title, description, png, black=false}) {
  return (
    <div className="cursor-pointer group sm:w-80 w-full sm:h-full h-80 relative hover:-translate-y-8 transition-all bg-white/20 backdrop-blur-sm rounded-3xl flex flex-col justify-start items-start p-2">
    <div className="h-1/2 w-full relative">
      <img 
      src={urlFor(png).url()}
      className="w-full h-full absolute group-hover:-top-16 -top-8 transition-all group-hover:scale-125 rounded-2xl"
      alt="project"
      />
    </div>

    <div className="h-1/2 w-full py-2">
      <h1 className={`font-pop text-2xl text-ellipsis font-semibold ${black ? "text-black" : "text-white"} `}>
        {title}
      </h1>
      <p className={`leading-tight text-sm mt-2 text-justify ${black ? "text-black" : "text-white"}  font-light`}>
        {description}
      </p>

      <button className={`absolute bottom-2 flex justify-center items-center right-4 ${black ? "text-black" : "text-white"}  gap-1`}>Explore <GoArrowUpRight className='rotate-45'/></button>
    </div>
  </div>
  )
}

export default PastProjectCards