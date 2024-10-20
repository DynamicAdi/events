import React from 'react'
import BlogPost from "./page";
import {getPost} from "@/lib/calls.ts"


async function BlogApi() {
    const posts = await getPost('blogcard'); 
  return (
    <BlogPost data={posts}/>
  )
}

export default BlogApi