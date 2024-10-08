import React from 'react'

function GlowBtn({string, Icon}) {
  return (
    <button className='bg-orange-600/15 border border-orange-500 border-solid font-mon rounded-full px-4 sm:py-2 py-1 text-xl sm:text-3xl font-medium text-orange-600 flex justify-center items-center gap-4 mb-2 hover:scale-90 transition duration-300 hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-300 hover:border-transparent hover:text-white'>{string} {Icon ? <Icon /> : ""}</button>
  )
}

export default GlowBtn