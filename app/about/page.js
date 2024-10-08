import React from 'react'
import {getPost} from "../../lib/calls";
import About from "./data";

async function AboutUs() {
    const posts = await getPost('aboutpage');
    
  return (
    <About data={posts}/>
  )
}

export default AboutUs