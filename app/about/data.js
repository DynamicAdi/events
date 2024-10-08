"use client";

import Navbar from "@/components/global/navbar/Navbar";
import React from "react";
import Footer from "@/components/global/Footer";
import { urlFor } from "@/lib/image";



function About({data}) {
  return (
    <>
    <div className="w-screen h-auto mb-4">
      <Navbar />
      <h1 className="text-center text-5xl font-pop font-bold">
        <span className="text-primary">About</span> us
      </h1>
      <div className="w-full h-5/6 mt-4 flex justify-between items-start px-8">
        <div className="w-1/2 h-full mt-4">
          <p className="font-mon font-normal text-xl text-justify">
         {data[0].mainDescription}
          </p>

        <div className="w-full h-auto mt-8 flex gap-2 justify-start items-center flex-wrap">
          
        {
          data[0].ourPartners.map((item) => (
            <div className="w-28 h-3w-28 rounded-full" key={item._key}>
            <img src={urlFor(item.image).url()} alt="logo" className="h-full w-full rounded-full" />
          </div>
          ))
        }
        </div>
        </div>

        <div className="w-1/2 h-[90%] mt-4 p-6 relative">
            <img src="https://picsum.photos/500" className="w-80 absolute inset-0 left-4" alt="pic" />
            <img src="https://picsum.photos/700" className="w-80 absolute inset-52 z-10" alt="pic" />
            <img src="https://picsum.photos/800" className="w-80 absolute left-[26rem] top-0" alt="pic" />
            <img src="https://picsum.photos/900" className="w-72 absolute inset-96 left-[26rem]" alt="pic" />
            <img src="https://picsum.photos/1000" className="w-72 absolute inset-96 left-[1rem]" alt="pic" />
            <img src="https://picsum.photos/800" className="w-80 absolute inset-0 left-4 -bottom-24" alt="pic" />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default About;
