import React from 'react'
import svg from "@/assets/side.svg"
import SideBar from "@/components/ui/global/Navbar"
import {motion} from "framer-motion"

function Background({ children }) {
  const fadeInOutVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    exit: { opacity: 0, y: -50, transition: { duration: 1 } }
  };

  return (
<div style={{scrollbarWidth: 'none'}} className="h-[95%] w-[95%] overflow-auto bg-gradient-to-br from-[#00054F] from-20% to-[#5C7FFF] rounded-3xl fixed">
    <img src={svg.src} className="fixed z-10 sm:top-4 sm:left-9 -top-20 left-0 w-64 h-64 sm:w-auto sm:h-auto" />
    <SideBar />
    <motion.div className={`w-full h-[110%] sm:py-10 sm:pr-4 relative sm:px-6 px-2`}>
  {children}
    </motion.div>
  </div>
  )
}

export default Background