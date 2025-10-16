"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/global/navbar/Navbar";
import image from "@/assets/services.jpg";
import Footer from "@/components/global/Footer";
import Card from "./card.js";
import { urlFor } from "@/lib/image";
import { getPost } from "@/lib/calls";
import Loader from "@/components/global/loader/page.jsx";

function Services() {
  const [data, setData] = useState([]);
  const [footer, seFooter] = useState([]);
  const [loader, startLoader] = useState(true);

  const getData = async () => {
    startLoader(true);
    const posts = await getPost("services");
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
      <div className="w-full h-auto flex flex-wrap justify-start items-start gap-14 px-4">
        {data?.length > 0 &&
          data?.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              image={`${item.image ? urlFor(item.image)?.url() : ""}`}
            />
          ))}
      </div>
      <Footer posts={footer} />
    </div>
  );
}

export default Services;
