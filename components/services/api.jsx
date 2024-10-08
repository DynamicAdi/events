import React from 'react'
import MiddleWare from './middleware'
import { getPost } from '@/lib/calls'

async function ServicesApi() {
    const posts = await getPost('services')
    
    return (
    <MiddleWare rawData={posts[0].services}/>
  )
}

export default ServicesApi