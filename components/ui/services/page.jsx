"use client";
import { urlFor } from "@/lib/image";
import React from "react";
import Title from "../global/Title";

function Services({ rawData }) {
  return (
    <>
      <Title text={"Services"}/>
    <div className="w-full sm:h-[75%] h-auto relative justify-start items-start flex sm:flex-row flex-col gap-3" id="services">
      <div className="flex flex-col gap-3 w-auto h-full">
        <div className="sm:w-96 w-full sm:h-[60%] h-[30%] group rounded-2xl relative overflow-hidden cursor-pointer">
          <div className="w-full h-full bg-gradient-to-b transition-all from-transparent to-black/80 absolute inset-0 z-50 translate-y-full group-hover:translate-y-0 ">
            <h1 className="absolute bottom-0 p-4 text-white font-bold text-3xl">
              {rawData[0]?.title ? rawData[0].title : "Services name"}
            </h1>
          </div>
          <img
            src={
              rawData[0]?.image
                ? urlFor(rawData[0].image).url()
                : "https://picsum.photos/900"
              }
            alt="representation image"
            className="w-full h-full object-cover group-hover:scale-110 transition-all"
          />
        </div>
        <div className="sm:w-96 w-full h-[30%] group rounded-2xl relative overflow-hidden cursor-pointer">
          <div className="w-full h-full bg-gradient-to-b transition-all from-transparent to-black/80 absolute inset-0 z-50 translate-y-full group-hover:translate-y-0 ">
            <h1 className="absolute bottom-0 p-4 text-white font-bold text-3xl">
              {rawData[1]?.title ? rawData[1].title : "Services name"}
            </h1>
          </div>
          <img
            src={
              rawData[1]?.image
                ? urlFor(rawData[1].image).url()
                : "https://picsum.photos/1000"
            }
            alt="representation image"
            className="w-full h-full object-cover group-hover:scale-110 transition-all"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 w-auto h-full">
        <div className="sm:w-[32rem] w-full h-full group rounded-2xl relative overflow-hidden cursor-pointer">
          <div className="w-full h-full bg-gradient-to-b transition-all from-transparent to-black/80 absolute inset-0 z-50 translate-y-full group-hover:translate-y-0 ">
            <h1 className="absolute bottom-0 p-4 text-white font-bold text-3xl">
              {rawData[2]?.title ? rawData[2].title : "Services name"}
            </h1>
          </div>
          <img
            src={
              rawData[2]?.image
                ? urlFor(rawData[2].image).url()
                : "https://picsum.photos/1100"
            }
            alt="representation image"
            className="w-full h-full object-cover group-hover:scale-110 transition-all"
          />
        </div>
        <div className="flex gap-3 h-full">
          <div className="sm:w-72 w-full h-[88%] group rounded-2xl relative overflow-hidden cursor-pointer">
            <div className="w-full h-full bg-gradient-to-b transition-all from-transparent to-black/80 absolute inset-0 z-50 translate-y-full group-hover:translate-y-0 ">
              <h1 className="absolute bottom-0 p-4 text-white font-bold text-3xl">
                {rawData[3]?.title ? rawData[3].title : "Services name"}
              </h1>
            </div>
            <img
              src={
                rawData[3]?.image
                  ? urlFor(rawData[3].image).url()
                  : "https://picsum.photos/1200"
              }
              alt="representation image"
              className="w-full h-full object-cover group-hover:scale-110 transition-all"
            />
          </div>
          <div className="sm:w-52 w-full h-[88%] group rounded-2xl relative overflow-hidden cursor-pointer">
            <div className="w-full h-full bg-gradient-to-b transition-all from-transparent to-black/80 absolute inset-0 z-50 translate-y-full group-hover:translate-y-0 ">
              <h1 className="absolute bottom-0 p-4 text-white font-bold text-3xl">
                {rawData[4]?.title ? rawData[4].title : "Services name"}
              </h1>
            </div>
            <img
              src={
                rawData[4]?.image
                  ? urlFor(rawData[4].image).url()
                  : "https://picsum.photos/1080"
              }
              alt="representation image"
              className="w-full h-full object-cover group-hover:scale-110 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-auto h-full">
        <div className="flex gap-3 h-2/5">
          <div className="sm:w-56 w-full h-full group rounded-2xl relative overflow-hidden cursor-pointer">
            <div className="w-full h-full bg-gradient-to-b transition-all from-transparent to-black/80 absolute inset-0 z-50 translate-y-full group-hover:translate-y-0 ">
              <h1 className="absolute bottom-0 p-4 text-white font-bold text-3xl">
                {rawData[5]?.title ? rawData[5].title : "Services name"}
              </h1>
            </div>
            <img src={rawData[5]?.image ? urlFor(rawData[5].image).url() : "https://picsum.photos/800"} alt="representation image" className="w-full h-full object-cover group-hover:scale-110 transition-all"/>
          </div>
          <div className="sm:w-60 w-full h-full group rounded-2xl relative overflow-hidden cursor-pointer">
            <div className="w-full h-full bg-gradient-to-b transition-all from-transparent to-black/80 absolute inset-0 z-50 translate-y-full group-hover:translate-y-0 ">
              <h1 className="absolute bottom-0 p-4 text-white font-bold text-3xl">
                {rawData[6]?.title ? rawData[6].title : "Services name"}
              </h1>
            </div>
            <img src={rawData[6]?.image ? urlFor(rawData[6].image).url() : "https://picsum.photos/700"} alt="representation image" className="w-full h-full object-cover group-hover:scale-110 transition-all"/>
          </div>
        </div>
        <div className="sm:w-[30rem] w-full h-3/6 group rounded-2xl relative overflow-hidden cursor-pointer">
          <div className="w-full h-full bg-gradient-to-b transition-all from-transparent to-black/80 absolute inset-0 z-50 translate-y-full group-hover:translate-y-0 ">
            <h1 className="absolute bottom-0 p-4 text-white font-bold text-3xl">
              {rawData[7]?.title ? rawData[7].title : "Services name"}
            </h1>
          </div>
          <img src={rawData[7]?.image ? urlFor(rawData[7].image).url() : "https://picsum.photos/850"} alt="representation image" className="w-full h-full object-cover group-hover:scale-110 transition-all"/>
        </div>
      </div>
    </div>
              </>
  );
}
6;

export default Services;
