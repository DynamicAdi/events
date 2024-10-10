import React from "react";
import Icon from "../global/navbar/Icon";
import Title from "../global/Title";
import BlogCard from "./Card";
import GlowBtn from "../global/GlowBtn";
import Link from "next/link";

function Blogs({data}) {
  return (
    <div className="w-screen sm:h-screen h-auto" id="blogs">
      <div className="w-full h-24 pr-8 flex justify-between">
        <Title title={"Blogs"} smallPhrase={true} />
      </div>

      <div className="w-full h-[85%] relative flex justify-start items-start sm:justify-end sm:items-end">
        <div className="w-full h-5/6 p-4 px-4 sm:px-6 flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:items-start gap-4">
        {
          data.map((item, index) => (
          <Link href={`/blog/${item.slug.current}`} key={index}>
            <BlogCard title={item.title} date={item._updatedAt} image={item.mainImage} author={item.author.name} slug={item.slug.current} description={item.minidesc} />
          </Link>
          ))
        }
        </div>
      </div>
    </div>
  );
}

export default Blogs;
