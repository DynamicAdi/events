import React from 'react'
import PastProjects from "./page"
import { getPost } from '@/lib/calls';


async function GetProjects() {
    const posts = await getPost("projects");
    
  return (
    <PastProjects data={posts}/>
  )
}

export default GetProjects