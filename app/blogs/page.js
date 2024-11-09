import React from "react";
import Navbar from "../../components/global/navbar/Navbar";
import BlogPostCard from "./card";
import Link from "next/link";
import { getData } from "../../core/page.js";

async function page() {
  const data = await getData("blogcard");
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <Navbar />
      <div className="mt-10 p-6">
        <h1
          className={`font-pop font-black text-4xl sm:text-6xl px-4 text-black mb-12`}
        >
          All Blogs
        </h1>
        {data.length > 0 && data.map((item, index) => (
          <Link href={`/blog/${item.slug.current}`} key={index}>
          <BlogPostCard title={item.title} date={item._updatedAt} image={item.mainImage} author={item.author.name} slug={item.slug.current} description={item?.minidesc} />
        </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
