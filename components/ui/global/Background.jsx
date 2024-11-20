import React from 'react'
import svg from "@/assets/side.svg"
import {motion} from "framer-motion"
import Link from 'next/link'

function Background({ children, scrollToTop }) {

return (
<div style={{scrollbarWidth: 'none'}} className="h-[95%] w-[95%] overflow-auto bg-gradient-to-br from-primary from-20% to-secondary rounded-3xl fixed">
    <Link href={"/"} className='h-full w-full'>
    <img onClick={scrollToTop} src={svg.src} className="cursor-pointer fixed z-[9999px] sm:top-4 sm:left-9 -top-20 left-0 w-64 h-64 sm:w-auto sm:h-auto" />
    </Link>
    <motion.div className={`w-full h-full sm:pt-32 sm:pr-4 pt-28 relative sm:px-6 px-2`}>
  {children}
    </motion.div>
  </div>
  )
}

export default Background