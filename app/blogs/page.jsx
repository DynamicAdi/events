"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/global/navbar/Navbar";
import BlogPostCard from "./card";
import Link from "next/link";
import Footer from "@/components/global/Footer";
import { getPost } from "../../lib/calls";
import Loader from "@/components/global/loader/page";

function Blogs() {
  const [data, setData] = useState([]);
  const [footer, seFooter] = useState([]);
  const [loader, startLoader] = useState(true);

  const getData = async () => {
    startLoader(true);
    const posts = await getPost("blogcard");
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
    <div className="w-full h-auto overflow-x-hidden">
      <Navbar />
      <div className="mt-10 p-6">
        <h1
          className={`font-pop font-black text-4xl sm:text-6xl px-4 text-black mb-12`}
        >
          All Blogs
        </h1>
        {data.length > 0 &&
          data.map((item, index) => (
            <Link href={`/blog/${item.slug.current}`} key={index}>
              <BlogPostCard
                title={item.title}
                date={item._updatedAt}
                image={item.mainImage}
                author={item.author.name}
                slug={item.slug.current}
                description={item?.minidesc}
              />
            </Link>
          ))}
      </div>
      <Footer posts={footer} />
    </div>
  );
}

export default Blogs;
