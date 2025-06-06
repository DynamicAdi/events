import React from 'react';
import Details from '@/components/details/page';
import BlogDetails from '@/components/details/blogDetails';
import {getPost} from "../../../lib/calls";

export default async function Blogs() {
  const posts = await getPost('fullBlog');
  const more = await getPost('blogcard');

  return (
    <>
    <BlogDetails data={posts} more={more} />
    </>
  );
}
