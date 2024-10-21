import React from "react";
import Navbar from "../../components/global/navbar/Navbar";
import { getPost } from "@/lib/calls";
import BlackCard from "@/components/ui/projects/blackCard";
import Link from "next/link";

async function page() {
  const data = await getPost("projects");
  return (
    <div className="w-full h-auto">
      <Navbar />
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
        {/* <Link href={`/${item.slug.current}/${item._type}`} key={item.slug.current} className='h-full'>
                  <PastProjectCards key={item._id} title={item.title} image={item.image} png={item.pngimage[0]} description={item.minidesc} />
                </Link> */}
      </div>
    </div>
  );
}

export default page;
