import React from "react";
import Navbar from "../../components/global/navbar/Navbar";
import BlackCard from "@/components/ui/projects/blackCard";
import Link from "next/link";
import { getData } from "../../core/page";
import image from "@/assets/projects.png";


async function page() {
  const data = await getData("projects");
  return (
    <div className="w-full h-auto">
      <Navbar />
      <div className="w-full sm:h-80 h-40 my-4">
        <img src={image.src} alt="dummy image" className="w-full h-full object-cover" />
      </div>
      <div className="mt-10 p-6">
        <h1
          className={`font-pop font-black text-4xl sm:text-6xl px-4 text-black mb-12`}
        >
          All projects
        </h1>
        {data.length > 0 && data.map((item) => (
          <Link
            href={`/${item.slug.current}/${item._type}`}
            key={item.slug.current}
            className="h-full"
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
    </div>
  );
}

export default page;
