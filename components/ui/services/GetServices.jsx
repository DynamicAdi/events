import React from 'react'
import Services from './page'
import { getPost } from '@/lib/calls'

async function ServicesApi() {
    const posts = await getPost('services');
    return (
    <Services rawData={posts[0].services}/>
  )
}

export default ServicesApi