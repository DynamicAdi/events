import React from 'react'
import GlowBtn from '../global/GlowBtn';
import {RxDotFilled, RxCalendar, RxAvatar} from 'react-icons/rx'

function BlogCard() {
  return (
    <div className="w-72 h-[90%] relative hover:scale-105 hover:-translate-y-8 group transition-all cursor-pointer bg-transparent rounded-3xl flex flex-col justify-start items-start p-2">
    <div className="h-1/2 w-full overflow-hidden rounded-3xl">
      <img
        src="https://picsum.photos/800"
        className="w-full h-full rounded-2xl group-hover:scale-125 transition-all duration-300"
        alt="project"
      />
    </div>

    <div className="h-1/2 w-full py-2">
      <h1 className="font-pop text-2xl text-ellipsis font-semibold text-balance">
        Best guide to buy a building...
      </h1>
      <p className="leading-tight text-lg mt-2 text-justify text-gray-400 font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit...
      </p>
      <div className="w-full flex justify-start items-center mt-2 text-gray-400">
        <div className="flex justify-center items-center gap-1"><RxCalendar />9/21/2024</div>
        <div className="dot"><RxDotFilled /></div>
        <div className="flex justify-center items-center gap-1"><RxAvatar />John Doe</div>
      </div>

        <div className="scale-50 absolute bottom-2 -right-10">
            <GlowBtn string={"Read More"} />
        </div>
      </div>
  </div>
  )
}

export default BlogCard