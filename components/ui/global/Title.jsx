import React from 'react'

function Title({text, color=false}) {
  return (
    <h1 className={`font-pop font-black text-4xl sm:text-8xl text-white ${color ? "text-black" : "text-white"}`}>{text}</h1>
  )
}

export default Title