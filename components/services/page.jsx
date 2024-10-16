"use client"

import React from 'react'
import Title from '../global/Title'
import { useScroll, useTransform } from 'framer-motion';
import { urlFor } from '@/lib/image';

function MobileServices({data}) {
  const {scrollYProgress} = useScroll();
  const opacity = useTransform(scrollYProgress, [0.7, 0.85], [1, 0]);
  return (
    <div className="w-full h-auto" style={{opacity}} id="services">
      <div className="w-full h-24 pr-8 flex justify-between">
        <Title title={"Services"} />
      </div>
  <div className="w-full h-full flex justify-center items-center flex-col px-4">
    <div className="cursor-pointer group overflow-hidden relative w-full h-40 rounded-2xl bg-gray-300 flex justify-start items-start gap-4">
    <div className="flex justify-start p-4 items-end text-white absolute w-full h-full bg-gradient-to-t transition-all from-black/60 to-transparent translate-y-full group-hover:translate-y-0">
      <h2 className="text-3xl font-pop font-bold">{data[0].title}</h2>
    </div>
    <img
      src={urlFor(data[0].image).url()}
      alt="project"
      className="w-full h-full object-cover rounded-2xl"
      />
  </div>
  </div>
      </div>
  )
}

export default MobileServices