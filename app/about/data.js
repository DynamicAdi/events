"use client";

import Navbar from "@/components/global/navbar/Navbar";
import React from "react";
import Footer from "@/components/global/Footer";
import { urlFor } from "@/lib/image";
import image1 from "@/assets/about.jpg";
import image2 from "@/assets/about2.jpg";
import image3 from "@/assets/about3.jpg";
import image4 from "@/assets/about4.jpg";
import image5 from "@/assets/about5.jpg";
import image6 from "@/assets/about6.jpg";
import Icon from "@/components/global/navbar/Icon";
import Banner from "@/components/global/Banner"




function About({data}) {
  return (
    <>
      <Navbar />
    <div className="w-screen h-auto mb-4 ml-4 sm:ml-0">
      <h1 className="text-center text-5xl font-pop font-bold">
        <span className="text-primary">About</span> us
      </h1>
      <div className="sm:hidden block w-screen h-64 mt-4"><img src={image1.src} className="w-full h-full object-cover" /></div>
      <div className="w-full h-5/6 mt-4 flex justify-between items-start sm:px-8 px-2">
        <div className="w-full sm:w-1/2 h-full mt-4">
          <p className="font-pop font-normal text-lg text-justify w-[95%]">
         {data[0].mainDescription}
          </p>

        <div className="w-full h-auto mt-8 flex gap-2 justify-start items-center flex-wrap">
          
        {
          data[0].ourPartners.map((item) => (
            <div className="w-24 sm:w-28 h-3w-28 rounded-full" key={item._key}>
            <img src={urlFor(item.image).url()} alt="logo" className="h-full w-full rounded-full" />
          </div>
          ))
        }
        </div>
        </div>

        <div className="w-1/2 h-[90%] mt-4 p-6 relative sm:block hidden">
            <img src={image1.src} className="w-80 absolute inset-0 left-4" alt="pic" />
            <img src={image2.src} className="w-80 absolute inset-52 z-10" alt="pic" />
            <img src={image3.src} className="w-80 absolute left-[26rem] top-0" alt="pic" />
            <img src={image4.src} className="w-72 absolute inset-96 left-[26rem]" alt="pic" />
            <img src={image5.src} className="w-72 absolute inset-96 left-[1rem]" alt="pic" />
            <img src={image6.src} className="w-80 absolute inset-0 left-4 -bottom-24" alt="pic" />
        </div>
      </div>
    </div>
    <Banner title={"Want to know more?"} />
    <Footer />
    </>
  );
}

export default About;
