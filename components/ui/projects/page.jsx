import React from 'react'
import PastProjectCards from "./Card"
import Title from '../global/Title'
import Link from 'next/link'
import {GoArrowUpRight} from "react-icons/go";


function PastProjects({data}) {
  return (
    <div className='w-full sm:h-full h-auto' id='projects'>
        <Title text={"Past Projects"}/>
    <div className="w-full sm:h-[60%] h-auto flex flex-col sm:flex-row justify-start items-end sm:gap-8 gap-20 my-10">
    {
      data.slice(0, 4).map((item) => (
                
                <Link href={`/${item.slug.current}/${item._type}`} key={item.slug.current} className='h-full'>
                  <PastProjectCards key={item._id} title={item.title} image={item.image} png={item.pngimage[0]} description={item.minidesc} />
                </Link>
                ))
    }
    </div>
    </div>
  )
}

export default PastProjects