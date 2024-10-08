import React from 'react'
import Projects from "./page"
import { getPost } from '@/lib/calls';


async function GetProjects() {
    const posts = await getPost("projects");
  return (
    <Projects data={posts}/>
  )
}

export default GetProjects