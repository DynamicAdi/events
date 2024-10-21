"use client";

import React from 'react'
import Heading from "./Heading"
import Render from "./Render"

function HomeSide() {
  return (
    <div
    className='w-full h-full flex justify-between flex-col-reverse sm:flex-row' id='home'>
        <Heading />
        <Render />
    </div>
  )
}

export default HomeSide