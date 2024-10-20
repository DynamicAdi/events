import Title from '@/components/ui/global/Title'
import React from 'react'

function Heading() {
  return (
    <div className='sm:w-3/5 w-full h-full flex flex-col sm:p-12 p-2 pb-4 items-start text-white'>
    <Title text={"Magnifique events"} />        
        <h1 className='sm:text-7xl text-3xl font-dm sm:mt-6 mt-1 font-medium'>Events</h1>
        <h1 className='sm:text-7xl text-3xl font-dm sm:mt-4 mt-1 font-medium'>Brand partners</h1>
        <div className="flex gap-2 items-start flex-col sm:flex-row">
        <h1 className='sm:text-7xl text-3xl font-dm sm:mt-4 mt-1 font-medium relative'>Travel</h1> <p className='sm:text-lg text-sm w-full sm:py-4 py-4 font-light'>Magnifique Events is your trusted partner for unforgettable event experiences.</p>
        </div>

    </div>
  )
}

export default Heading