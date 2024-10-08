import React from "react";
import Navbar from "../global/navbar/Navbar";
import Footer from "../global/Footer";
import { RxDotFilled, RxCalendar, RxAvatar } from "react-icons/rx";
import RichText from "@/components/portable/page";
import { urlFor } from "@/lib/image";

function BlogDetails({ data, more }) {
  return (
    <div className="w-screen h-auto">
      <Navbar />

      <div className="w-full py-6 flex items-start justify-between relative">
        <div className="w-3/4 pl-4 px-2 flex flex-col justify-start items-start gap-2">
          <div className="w-full h-[35rem] rounded-3xl bg-gray-200">
            <img
              src={urlFor(data[0].mainImage).url()}
              alt={data[0].slug.current}
              className="w-full h-full rounded-3xl"
            />
          </div>

          <div className="w-full flex justify-start items-center my-3 text-gray-400">
            <div className="text-xl flex justify-center items-center gap-2">
              <RxCalendar />
              {data[0]._updatedAt.split("T")[0]}
            </div>
            <div className="text-xl dot">
              <RxDotFilled />
            </div>
            <div className="text-xl flex justify-center items-center gap-2">
              <RxAvatar />
              {data[0].author.name}
            </div>
          </div>
          <h1 className="font-semibold text-4xl font-mon">{data[0].title}</h1>

          {/* <div className="w-full h-[50rem] bg-black"></div> */}
          <RichText blocks={data[0].body} />
        </div>

        <div className="w-1/4 h-full py-0 p-2 pr-6 sticky top-0 flex flex-col gap-3">
          <h1 className="font-mon font-bold text-4xl bg-gradient-to-br from-blue-900 to-blue-300 text-transparent bg-clip-text">
            Read other blogs
          </h1>

          {more.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer group overflow-hidden relative w-full h-40 rounded-2xl bg-gray-300 flex justify-start items-start gap-4"
            >
              <div className="flex justify-end p-2 items-end flex-col text-white absolute w-full h-full bg-gradient-to-t transition-all from-black/60 to-transparent translate-y-full group-hover:translate-y-0">
                <h2 className="text-3xl font-pop font-bold">{item.title}</h2>
                <div className="w-full flex justify-start items-center my-1 text-white">
                  <div className="text-base flex justify-center items-center gap-2">
                    <RxCalendar />
                    {item._updatedAt.split("T")[0]}
                  </div>
                  <div className="text-base dot">
                    <RxDotFilled />
                  </div>
                  <div className="text-base flex justify-center items-center gap-2">
                    <RxAvatar />
                    {item.author.name}
                  </div>
                </div>
              </div>
              <img
                src={urlFor(item.mainImage).url()}
                alt="project"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogDetails;
