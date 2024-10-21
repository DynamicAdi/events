import React from 'react'
import BlogPost from "./page";
import { getData } from '@/core/page';


async function BlogApi() {
    const posts = await getData("blogcard");  
  return (
    <BlogPost data={posts}/>
  )
}

export default BlogApi