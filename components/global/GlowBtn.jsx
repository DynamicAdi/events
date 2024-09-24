import React from 'react'

function GlowBtn({string, Icon}) {
  return (
    <button className='bg-blue-600/20 bg-blue-600 border border-blue-600 border-solid font-mon rounded-full px-4 sm:py-2 py-1 text-xl sm:text-3xl font-medium text-blue-800 flex justify-center items-center gap-4 mb-2 hover:scale-90 transition duration-300 hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-300 hover:text-white'>{string} {Icon ? <Icon /> : ""}</button>
  )
}

export default GlowBtn