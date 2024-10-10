"use client";

import React from "react";
import Navbar from "../global/navbar/Navbar";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useScroll, useTransform} from "framer-motion";
import GlowBtn from "../global/GlowBtn";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "../Building";


function HomePage() {
  const {scrollYProgress} = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  return (
    <motion.div
    style={{opacity}}
    id="home"
    className="w-screen h-screen sticky top-0">
        <Navbar />
        <div className="w-full h-full absolute inset-0 flex sm:flex-row flex-col-reverse justify-between">
        {/* <h1 className="absolute top-1/4 left-2 text-3xl">Random number</h1> */}
        <div className="sm:h-full sm:w-2/5 h-2/5 w-full flex justify-end items-end">
            <div className="sm:w-full sm:h-[45%] flex flex-col justify-start items-start px-4">
            <motion.div
                initial={{
                  scale: 0,
                }}
                whileInView={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                viewport={{ once: true }}
              >
                <GlowBtn string={"Get Started"} Icon={FaArrowRightLong} />
              </motion.div>

              <h1 className="sm:text-6xl gap-0 text-3xl font-bold sm:text-left text-center w-full">
                <motion.span
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
                  viewport={{ once: true }}
                  className="revel inline bg-gradient-to-br from-orange-500 to-orange-200 text-transparent bg-clip-text"
                >
                  Magnifique
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut", delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-bl from-gray-900 to-gray-400 ml-4 inline-block text-transparent bg-clip-text"
                >
                  {" "}
                  events
                </motion.span>
              </h1>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                }}
                viewport={{ once: true }}
                className="sm:text-lg text-base w-full mt-4 sm:mt-4 font-mon text-justify"
              >
                Magnifique Events is your trusted partner for unforgettable event experiences. From seamless travel arrangements to impactful brand collaborations, we specialize in creating memorable moments that elevate your events and leave a lasting impression. Let us make your next event truly magnificent!
               {/* Magnifique events - Your event travel and brand partner */}
              </motion.p> 
            </div>
        </div>
        <div className="sm:h-full sm:w-2/3 w-full h-3/5  flex justify-center  items-center">
            <div className="w-full sm:h-[80%] h-[60%]">
            <Canvas className="w-full h-full">
              <OrbitControls enableZoom={true} enableDamping />
              {/* <Modern /> */}
              <Model />
            </Canvas>
            </div>
        </div>
        </div>
    </motion.div>
    
  )
}

export default HomePage