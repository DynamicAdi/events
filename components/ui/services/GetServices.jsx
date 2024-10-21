import React from 'react'
import Services from './page'
import { getData } from '@/core/page';

async function ServicesApi() {
    const posts = await getData("services");  

    return (
    <Services rawData={posts[0].services}/>
  )
}

export default ServicesApi