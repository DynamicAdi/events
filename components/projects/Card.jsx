import React from 'react'
import {GoArrowUpRight} from "react-icons/go";
import logo from "@/assets/model.png";
import Image from 'next/image';
import { urlFor } from '@/lib/image';

function PRojectCard({title, description, image, png}) {
  return (
    <div className="cursor-pointer group w-72 h-5/6 relative hover:-translate-y-8 transition-all bg-[#F7F7F7] border border-solid border-gray-300 rounded-3xl flex flex-col justify-start items-start p-2">
    <div className="h-1/2 w-full relative">
      <img
        src={urlFor(image).url()}
        className="w-full h-full rounded-2xl transition-opacity group-hover:opacity-0"
        alt="project"
      />
      <img 
      src={urlFor(png).url()}
      className="w-full h-full absolute -top-8 left-2 transition-opacity opacity-0 scale-110 group-hover:opacity-100 rounded-2xl"
      alt="project"
      objectFit="cover"
      />
    </div>

    <div className="h-1/2 w-full py-2">
      <h1 className="font-pop text-2xl text-ellipsis font-semibold">
        {title}
      </h1>
      <p className="leading-tight text-sm mt-2 text-justify text-gray-400 font-light">
        {description}
      </p>

      <button className="absolute bottom-2 flex justify-center items-center right-4 text-blue-700 gap-1">Explore <GoArrowUpRight/></button>
    </div>
  </div>
  )
}

export default PRojectCard