import React from "react";
import Title from "../global/Title";
import BlogPostCard from "./Card";
import Link from "next/link";

function BlogPost({data}) {
  return (
    <div className="w-full h-full" id="blogs">
      <Title text={"Blogs"} />
    <div className="w-full sm:h-[60%] h-auto mt-6 mb-4 flex items-end justify-center gap-12">
    {
      data.
      slice(0, 4).
      map((item, index) => (
        <Link href={`/blog/${item.slug.current}`} key={index}>
        <BlogPostCard title={item.title} date={item._updatedAt} image={item.mainImage} author={item.author.name} slug={item.slug.current} description={item?.minidesc} />
      </Link>
      ))
    }


        </div>
    </div>
  );
}

export default BlogPost;
