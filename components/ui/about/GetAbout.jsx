import React from 'react'
import {getData} from "@/core/page.js"

import AboutUs from './page.jsx';

async function GetAbout() {
    const posts = await getData("about");  
  return (
    <AboutUs data={posts} />
  )
}

export default GetAbout