"use client";

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Navbar from "../global/navbar/Navbar";
// import Image from "next/image";
// import dummy from "@/assets/model.png";
import GlowBtn from "../global/GlowBtn";
import GlowRadi from "../global/glow";

import { motion, useScroll, useTransform} from "framer-motion";
import { Canvas } from "@react-three/fiber";
import {Modern} from "@/components/Modern";
import { OrbitControls } from "@react-three/drei";
import { useScrollProgress } from "../global/useScroll";

function Home() {
  // const {} = useScrollProgress();
  const {scrollYProgress} = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  return (
    <motion.div className={`w-screen h-screen flex flex-col justify-between sticky top-2`} style={{opacity, scale}}>
      <Navbar />
      <div className="absolute right-8 top-5">
        <GlowRadi
          stop_1={"rgba(255, 166, 0, 0.5)"}
          stop_2={"rgba(255, 216, 143, 0)"}
        />
      </div>
      <div className="absolute left-10 -bottom-6">
        <GlowRadi stop_1={"#0362fc60"} stop_2={"#0362fc00"} />
      </div>

      <div className="w-full sm:h-[90%] h-full bg-white flex sm:justify-between justify-center flex-col sm:flex-row">
        <div className="sm:w-1/2 sm:h-full w-[70%] h-1/2 relative">
          <motion.div 
          className="w-[135%] h-[80%] sm:-top-14 top-14 -right-4 relative z-10">
            <Canvas>
              <OrbitControls enableZoom={false}/>
              <Modern />
            </Canvas>
            {/* <Image src={dummy} alt="model" objectFit="cover" /> */}
          </motion.div>
        </div>
        <div className="sm:w-1/2 sm:h-full w-full h-1/2 flex justify-end items-end">
          <div className="w-full sm:h-[55%] h-[100%] sm:pr-12 p-6 sm:pb-4 flex justify-center sm:justify-end items-center sm:items-end flex-col relative">
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
              viewport={{once: true}}
            >
              <GlowBtn string={"Get Started"} Icon={FaArrowRightLong} />
            </motion.div>
            <h1 className="sm:text-7xl gap-0 text-3xl font-bold sm:text-right text-center w-full">
              <motion.span
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
                viewport={{once: true}}
                className="revel inline bg-gradient-to-br from-blue-700 to-indigo-300 text-transparent bg-clip-text"
              >
                Magnifique
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut", delay: 0.4 }}
                viewport={{once: true}}
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
            viewport={{once: true}}
            
            className="big sm:text-lg text-xs w-full mt-4 sm:mt-6 text-justify font-mon">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              sequi quasi esse mollitia dolore eius ipsa velit sapiente itaque
              molestias. Quidem numquam cumque ratione magni aliquid voluptatem
              praesentium, delectus quo veniam ab tempora dolorum possimus quod
              nam eum soluta. Consequatur cumque corrupti esse sit explicabo,
              fugiat obcaecati. Doloremque, nulla voluptatem!
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
