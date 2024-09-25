import React from 'react'
import logo from "@/assets/logo.png";
import Image from 'next/image'
import Icon from './Icon';


function Navbar() {
  return (
    <div className="w-full h-16 flex justify-between items-center sm:px-4 px-1 py-2">
    <div className="w-20 sm:w-28 h-full">
        <Image src={logo} alt='logo' width={100} height={100} objectFit='cover' />
    </div>
    <div className="sm:w-24 w-12 h-full flex justify-center items-center">
    {/* <Icon /> */}
</div>
</div>
  )
}

export default Navbar