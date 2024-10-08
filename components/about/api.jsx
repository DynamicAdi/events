import React from 'react'
import {getPost} from "../../lib/calls.ts"
import AboutUs from './page.jsx';

async function GetAbout() {
    const posts = await getPost("about");
  return (
    <AboutUs data={posts} />
  )
}

export default GetAbout