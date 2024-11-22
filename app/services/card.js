import React from 'react'

function Card({title, description, image}) {
  return (
    <div className="sm:w-80 w-full h-[30%] group rounded-2xl relative overflow-hidden cursor-pointer">
    <div className="w-full h-full bg-gradient-to-b transition-all from-transparent to-black/80 absolute inset-0 z-50 translate-y-full group-hover:translate-y-0 rounded-2xl">
      <h1 className="absolute bottom-0 p-4 text-white font-bold text-3xl">
        {title}
      {/* <p className="text-xs font-light mt-2">{description}</p> */}
      </h1>
    </div>
  <div className="w-full h-64 bg-red-500">
    <img
      src={image}
      alt="representation image"
      className="w-full h-full object-cover group-hover:scale-110 transition-all"
      />
      </div>
  </div>
  )
}

export default Card