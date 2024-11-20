import React from "react";
import Navbar from "../../components/global/navbar/Navbar";
import BlackCard from "@/components/ui/projects/blackCard";
import Link from "next/link";
import { getData } from "../../core/page";
import image from "@/assets/projects.png";
import Footer from "@/components/global/Footer";

export const dynamic = 'force-dynamic';
export const dynamicParams = true; 

async function page() {
  const data = await getData("projects");
  const footer = await getData("connect");
  return (
    <div className="w-full h-auto">
      <Navbar />
      <div className="w-full sm:h-80 h-40 my-4 relative">
      <h1
          className={`absolute z-30 sm:inset-4 inset-0 font-pop font-black text-4xl sm:text-6xl px-4 text-white my-6`}
        >
          All projects
        </h1>
        <img src={image.src} alt="dummy image" className="w-full h-full object-cover brightness-[65%]" />
      </div>
      <div className="mt-10 p-6 flex gap-12 flex-wrap flex-col sm:flex-row">
        {data.length > 0 && data.map((item) => (
          <Link
            href={`/${item.slug.current}/${item._type}`}
            key={item.slug.current}
            className="h-full w-auto"
          >
            <BlackCard
              key={item._id}
              title={item.title}
              image={item.image}
              png={item.pngimage[0]}
              description={item.minidesc}
            />
          </Link>
        ))}
      </div>
      <Footer posts={footer}/>
    </div>
  );
}

export default page;
