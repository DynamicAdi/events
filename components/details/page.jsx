"use client";

import React, { useState } from "react";
import Navbar from "../global/navbar/Navbar";
import GlowBtn from "../global/GlowBtn";
import Footer from "../global/Footer";
import GlowRadi from "../global/glow";
import RichText from  "@/components/portable/page"
import { urlFor } from "@/lib/image";

function Details({data, more}) {
  const [activeImage, setActiveImage] = useState(data[0].pngimage[0])
  return (
    <div className="w-screen h-auto">
      <Navbar />

      <div className="w-full py-6 flex items-start justify-between relative">
        <div className="w-3/4 pl-4 px-2 flex flex-col justify-start items-start gap-2">
          <div className="w-full h-[30rem] rounded-3xl bg-gray-200">
            <img src={urlFor(activeImage).url()} alt="image" className="w-full h-full object-contain"/>
          </div>
          <div className="w-full h-36 flex justify-start items-center gap-2">
            {
              data[0].pngimage.map((img, i) => (
                <div className="w-1/6 h-full rounded-xl cursor-pointer" key={i} onClick={() => setActiveImage(img)}>
                <img src={urlFor(img).url()} alt="ok" className="cursor-pointer w-full h-full object-contain hover:scale-105 transition-transform rounded-xl" />
            </div>
              ))
            }

          </div>

          <div className="w-full h-[4.5rem] flex justify-between items-center">
            <h1 className="bg-gradient-to-br from-gray-900 to-gray-400 ml-4 inline-block text-transparent bg-clip-text text-5xl font-bold font-pop">
              {data[0].title}
            </h1>
          </div>
        <RichText blocks={data[0].description} />
        </div>

        <div className="w-1/4 h-full py-0 p-2 pr-6 sticky top-0 flex flex-col gap-3">
          <h1 className="font-mon font-bold text-4xl bg-gradient-to-br from-blue-900 to-blue-300 text-transparent bg-clip-text">
            More like these
          </h1>
          
        {more.map((item, index) => (
          <div key={index} className="cursor-pointer group overflow-hidden relative w-full h-40 rounded-2xl bg-gray-300 flex justify-start items-start gap-4">
            <div className="flex justify-start p-4 items-end text-white absolute w-full h-full bg-gradient-to-t transition-all from-black/60 to-transparent translate-y-full group-hover:translate-y-0">
              <h2 className="text-3xl font-pop font-bold">{item.title}</h2>
            </div>
            <img
              src={urlFor(item.image).url()}
              alt="project"
              className="w-full h-full object-cover rounded-2xl"
              />
          </div>
            ))}
        </div>
      </div>
      <div className="w-full h-80 relative py-6 flex justify-start gap-10 items-center flex-col">
        <div className="absolute -top-12 -right-8">
          <GlowRadi stop_1={"#f7a12060"} stop_2={"#f7a12000"} />
        </div>
        <h1 className="text-6xl font-bold bg-gradient-to-br from-orange-500 to-orange-200 text-transparent bg-clip-text pb-4">
          Loved This Design?
        </h1>

        <button className="bg-orange-600/20 border border-orange-300 border-solid font-light rounded-full px-12 py-2 text-3xl text-orange-400 flex justify-center items-center gap-4 mb-2 hover:scale-90 transition duration-300 hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-300 hover:text-white">
          Let's get in touch
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
