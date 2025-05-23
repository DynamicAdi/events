import Title from '@/components/ui/global/Title'
import React from 'react'

function Heading() {
  return (
    <div className='sm:w-3/5 w-full h-full flex flex-col sm:p-12 p-2 pb-4 items-start text-white'>
    {/* <Title text={""} />         */}
    <h1 className={`font-pop font-black text-4xl sm:text-8xl text-white`}>Magnifique</h1>
        <h1 className='sm:text-7xl text-3xl font-dm sm:mt-16 mt-1 font-medium'>Your Event,</h1>
        <div className="flex gap-2 items-start flex-col sm:flex-row">
        <h1 className='sm:text-7xl text-3xl font-dm sm:mt-4 mt-1 font-medium relative'>Travel &</h1> 
        </div>
        <h1 className='sm:text-7xl text-3xl font-dm sm:mt-4 mt-1 font-medium'>Brand Partner.</h1>
        {/* <p className='sm:text-lg text-sm w-full sm:py-6 py-4 font-light'>Your trusted partner for unforgettable event experiences.</p> */}

    </div>
  )
}

export default Heading