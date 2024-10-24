import React from "react";
import Navbar from "@/components/global/navbar/Navbar";
import Link from "next/link";
import image from "@/assets/services.jpg";
import Footer from "@/components/global/Footer";
import { getData } from "@/core/page";
import Card from "./card.js";
import { urlFor } from "@/lib/image";

async function page() {
  const posts = await getData("services");
  const data = posts[0]?.services;
  return (
    <div className="w-full h-auto">
      <Navbar />
      <div className="w-full sm:h-80 h-40 my-4 relative">
        <h1
          className={`absolute z-30 sm:inset-4 inset-0 font-pop font-black text-3xl sm:text-6xl px-4 text-white my-6`}
        >
          All Services
        </h1>
        <img
          src={image.src}
          alt="dummy image"
          className="w-full h-full object-cover brightness-[65%]"
        />
      </div>
      <div className="w-full h-auto flex justify-start items-start gap-14 px-4">
        {data?.length > 0 &&
          data?.map((item) => (
            <Card
              title={item.title}
              description={
                item.description ? item.description : "No description provided"
              }
              image={urlFor(item.image).url()}
            />
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default page;
