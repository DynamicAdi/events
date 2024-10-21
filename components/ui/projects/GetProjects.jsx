import React from 'react'
import PastProjects from "./page"
import { getData } from '@/core/page';


async function GetProjects() {
    const posts = await getData("projects");
    
  return (
    <PastProjects data={posts}/>
  )
}

export default GetProjects