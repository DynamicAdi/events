import React from 'react'
import Blogs from "./page";
import { getPost } from '../../lib/calls';


async function BlogApi() {
    const posts = await getPost('blogcard');    
  return (
    <Blogs data={posts}/>
  )
}

export default BlogApi