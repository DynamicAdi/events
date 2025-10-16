"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/global/navbar/Navbar";
import BlackCard from "@/components/ui/projects/blackCard";
import Link from "next/link";
import image from "@/assets/projects.png";
import Footer from "@/components/global/Footer";
import { getPost } from "../../lib/calls";
import Loader from "@/components/global/loader/page";

async function Projects() {
  const [data, setData] = useState([]);
  const [footer, seFooter] = useState([]);
  const [loader, startLoader] = useState(true);

  const getData = async () => {
    startLoader(true);
    const posts = await getPost("projects");
    const foot = await getPost("connect");
    if (posts) {
      setData(posts);
    }
    if (foot) {
      seFooter(foot);
    }
    startLoader(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loader) {
    return <Loader />;
  }

  return (
    <div className="w-full h-auto">
      <Navbar />
      <div className="w-full sm:h-80 h-40 my-4 relative">
        <h1
          className={`absolute z-30 sm:inset-4 inset-0 font-pop font-black text-4xl sm:text-6xl px-4 text-white my-6`}
        >
          All projects
        </h1>
        <img
          src={image.src}
          alt="dummy image"
          className="w-full h-full object-cover brightness-[65%]"
        />
      </div>
      <div className="mt-10 p-6 flex gap-12 flex-wrap flex-col sm:flex-row">
        {data.length > 0 &&
          data.map((item) => (
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
      <Footer posts={footer} />
    </div>
  );
}

export default Projects;
