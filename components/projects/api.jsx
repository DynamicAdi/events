import React from 'react'
import Projects from "./page"
import { getPost } from '@/lib/calls';


async function GetProjects() {
    const posts = await getPost("mainpost");
    console.log(posts);
  return (
    <Projects data={posts}/>
  )
}

export default GetProjects