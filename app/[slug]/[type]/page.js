import React from 'react';
import Details from '@/components/details/page';
import { getPost } from '@/lib/calls';

export default async function Slug({params}) {
    const {slug, type} = params
    const posts = await getPost('fullProjects', slug, type);
    const more = await getPost('projects');
    
    // console.log(posts[0].pngimage);
    
  return (
    <>
    <Details data={posts} more={more}/>
    </>
  );
}
