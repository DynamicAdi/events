import React from 'react'
import {RxDotFilled, RxCalendar, RxAvatar} from 'react-icons/rx'
import { urlFor } from '@/lib/image';

function BlogCard({title, image, date, author, description}) {
  return (
    <div className="w-72 h-auto bg-black relative hover:scale-105 hover:-translate-y-8 group transition-all cursor-pointer bg-transparent rounded-3xl flex flex-col justify-start items-start p-2">
    <div className="h-1/2 w-full overflow-hidden rounded-3xl">
      <img
        src={urlFor(image).url()}
        className="w-full h-full rounded-2xl group-hover:scale-125 transition-all duration-300"
        alt="project"
      />
    </div>

    <div className="h-1/2 w-full py-2">
      <h1 className="font-pop text-2xl text-ellipsis font-semibold text-balance">
        {title}
      </h1>
      <p className="leading-tight text-lg mt-2 text-justify text-gray-400 font-light">
        {description}
      </p>
      <div className="w-full flex justify-start items-center mt-2 text-gray-400">
        <div className="flex justify-center items-center gap-1"><RxCalendar />{date.split("T")[0]}</div>
        <div className="dot"><RxDotFilled /></div>
        <div className="flex justify-center items-center gap-1"><RxAvatar />{author}</div>
      </div>

        <div className="scale-50 absolute bottom-2 -right-10">
          {/* <Link href={`/${slug}`}>
         <GlowBtn string={"Read More"} />
          </Link> */}
        </div>
      </div>
  </div>
  )
}

export default BlogCard