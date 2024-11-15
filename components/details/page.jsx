"use client";

import React, { useState } from "react";
import Navbar from "../global/navbar/Navbar";
import Footer from "../global/Footer";
import RichText from "@/components/portable/page";
import { urlFor } from "@/lib/image";
import Banner from "@/components/global/Banner";
import Link from "next/link";

// Memoized ThumbnailGallery component
const ThumbnailGallery = ({ images, setActiveImage }) => (
  <div className="w-full h-36 flex justify-start items-center gap-2">
    {images.map((img, i) => (
      <div
        key={i}
        className="sm:w-1/6 w-1/3 h-full rounded-xl cursor-pointer overflow-hidden"
        onClick={(event) => {
          event.preventDefault();
          setActiveImage(img);
        }}
      >
        <img
          src={urlFor(img).url()}
          alt="thumbnail"
          className="cursor-pointer w-full h-full object-cover hover:scale-105 transition-transform rounded-xl"
        />
      </div>
    ))}
  </div>
);

function Details({ data, more }) {
  const [activeImage, setActiveImage] = useState(data[0].pngimage[0]);

  return (
    <div className="w-screen h-auto overflow-x-hidden">
      <Navbar />

      <div className="w-full py-6 flex items-start justify-between relative">
        <div className="w-full sm:w-3/4 pl-4 px-2 flex flex-col justify-start items-start gap-2">
          <div className="w-full h-[15rem] sm:h-[30rem] rounded-3xl bg-gray-200 overflow-hidden">
            <img
              src={urlFor(activeImage).url()}
              alt="active image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Render ThumbnailGallery to handle thumbnail clicks separately */}
          <ThumbnailGallery images={data[0].pngimage} setActiveImage={setActiveImage} />

          <div className="w-full flex justify-between items-center">
            <h1 className="bg-gradient-to-br from-gray-900 to-gray-400 ml-0 sm:ml-4 inline-block text-transparent bg-clip-text text-5xl font-bold font-pop">
              {data[0].title}
            </h1>
          </div>
          <RichText blocks={data[0].description} />
        </div>

        <div className="hidden w-1/4 h-full py-0 p-2 pr-6 sticky top-0 sm:flex flex-col gap-3">
          <h1 className="font-mon font-bold text-4xl bg-gradient-to-br from-blue-900 to-blue-300 text-transparent bg-clip-text">
            More like these
          </h1>

          {more.map((item, index) => (
            <Link href={`/${item.slug.current}/${item._type}`} key={index}>
            <div
              key={index}
              className="cursor-pointer group overflow-hidden relative w-full h-40 rounded-2xl bg-gray-300 flex justify-start items-start gap-4"
            >
              <div className="flex justify-start p-4 items-end text-white absolute w-full h-full bg-gradient-to-t transition-all from-black/60 to-transparent translate-y-full group-hover:translate-y-0">
                <h2 className="text-3xl font-pop font-bold">{item.title}</h2>
              </div>
              <img
                src={urlFor(item.image).url()}
                alt="project"
                className="w-full h-full object-cover rounded-2xl"
                />
            </div>
                </Link>
          ))}
        </div>
      </div>
      <Banner title={"Loved this design?"} />
      <Footer />
    </div>
  );
}

export default Details;
