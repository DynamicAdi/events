import React from "react";
import Icon from "../global/navbar/Icon";
import Title from "../global/Title";
import BlogCard from "./Card";
import GlowBtn from "../global/GlowBtn";

function Blogs() {
  return (
    <div className="w-screen sm:h-screen h-auto relative" id="blogs">
      <div className="w-full h-24 pr-8 flex justify-between">
        <Title title={"Blogs"} smallPhrase={true} />
        <div className="py-4">
          <Icon />
        </div>
      </div>

      <div className="w-full h-[85%] relative flex justify-start items-start sm:justify-end sm:items-end">
        <div className="w-full h-5/6 p-4 px-4 sm:px-6 flex flex-col sm:flex-row justify-start items-start gap-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />

        </div>
      </div>
    </div>
  );
}

export default Blogs;
