import React from "react";
import Title from "../global/Title";
import Link from "next/link";
import readmore from "@/assets/readmore.svg"
import { urlFor } from "@/lib/image";

function AbousUs({data}) {
  const description = data.map((data) => data.miniDescription);
  return (
    // <div className="w-full h-full py-10 px-8 pr-4">
      <div className="w-[95%] h-full flex justify-between items-start absolute flex-col sm:flex-row">
        <div className="sm:w-3/5 w-full sm:h-full h-2/3">
          <Title text={"About us"} />
          <p className="px-2 text-white sm:text-xl text-xs mt-4 sm:w-3/4 w-full text-justify font-mon font-normal">
          {description}
          </p>
          <Link href={"/about"} className="absolute -left-[0px] hover:scale-90  translate-y-4 transition-all hover:-translate-x-3">
            {/* <img src={readmore.src} className="w-32 h-32 sm:w-auto sm:h-auto"/> */}
            <button className="sm:p-4 sm:py-2 p-2 py-1 bg-white rounded-3xl"><span className="sm:text-2xl text-base font-pop font-semibold bg-gradient-to-br from-blue-900 to-blue-600 inline-block text-transparent bg-clip-text">Read more</span></button>
          </Link>
        </div>
      <div className="sm:w-2/5 sm:h-[90%] h-1/2 w-full">
      <div className="w-full h-[80%] rounded-2xl relative overflow-hidden">
        <img src={urlFor(data[0].image).url()} className="w-full h-full object-cover" alt="img" />
        <div className="absolute rounded-2xl w-32 h-32 bg-white/40 backdrop-blur-sm p-2 bottom-0 left-0">
            <div className="w-full h-full rounded-xl overflow-hidden">
                <img src="https://picsum.photos/400" alt="" className="w-full h-full object-cover cursor-pointer"/>
            </div>
        </div>

      </div>
      </div>
        
      </div>
    // </div>
  );
}

export default AbousUs;
