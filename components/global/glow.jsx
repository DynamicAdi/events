import React from 'react'

function GlowRadi({stop_1, stop_2}) {
  return (
    <div className={`w-60 h-60 sm:w-96 sm:h-96 rounded-full`} style={{background: `radial-gradient(closest-side, ${stop_1}, ${stop_2})`}}></div>
  )
}

export default GlowRadi