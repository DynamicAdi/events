import React from 'react'
import PastProjectCards from "./Card"
import Title from '../global/Title'
import Link from 'next/link'
import {GoArrowUpRight} from "react-icons/go";


function PastProjects({data}) {
  return (
    <div className='w-full h-full'>
        <Title text={"Past Projects"}/>
    <div className="w-full sm:h-[60%] h-full flex flex-col sm:flex-row justify-start items-end gap-8 mt-10">
    {
      data.map((item) => (
                
                <Link href={`/${item.slug.current}/${item._type}`} key={item.slug.current} className='h-full'>
                  <PastProjectCards key={item._id} title={item.title} image={item.image} png={item.pngimage[0]} description={item.minidesc} />
                </Link>
                ))
    }
    </div>
    <p className='w-full text-center mt-4 sm:block hidden'>
    <Link href={"/"} className='text-xl underline text-white font-mon font-light'>View all</Link>
    </p>
    </div>
  )
}

export default PastProjects