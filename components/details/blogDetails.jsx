import React from "react";
import Navbar from "../global/navbar/Navbar";
import Footer from "../global/Footer";
import {RxDotFilled, RxCalendar, RxAvatar} from 'react-icons/rx'


function BlogDetails() {

  return (
    <div className="w-screen h-auto">
      <Navbar />

      <div className="w-full py-6 flex items-start justify-between relative">
        <div className="w-3/4 pl-4 px-2 flex flex-col justify-start items-start gap-2">
          <div className="w-full h-[35rem] rounded-3xl bg-gray-200">

          </div>
            
        <div className="w-full flex justify-start items-center my-3 text-gray-400">
        <div className="text-xl flex justify-center items-center gap-2"><RxCalendar />9/21/2024</div>
        <div className="text-xl dot"><RxDotFilled /></div>
        <div className="text-xl flex justify-center items-center gap-2"><RxAvatar />John Doe</div>
      </div>
      <h1 className="font-semibold text-4xl font-mon">Title of the blog</h1>

        <div className="w-full h-[50rem] bg-black"></div>
        </div>


        <div className="w-1/4 h-full py-0 p-2 pr-6 sticky top-0 flex flex-col gap-3">
          <h1 className="font-mon font-bold text-4xl bg-gradient-to-br from-blue-900 to-blue-300 text-transparent bg-clip-text">
            More like these
          </h1> 

          <div className="cursor-pointer group overflow-hidden relative w-full h-40 rounded-2xl bg-gray-300 flex justify-start items-start gap-4">
            <div className="flex justify-start p-4 items-end text-white absolute w-full h-full bg-gradient-to-t transition-all from-black/60 to-transparent translate-y-full group-hover:translate-y-0">
              <h2 className="text-3xl font-pop font-bold">Services name</h2>
            </div>
            <img
              src="https://picsum.photos/400"
              alt="project"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogDetails;
