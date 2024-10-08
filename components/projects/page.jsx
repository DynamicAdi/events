"use client";

import React from "react";
import GlowBtn from "../global/GlowBtn";
import Title from "../global/Title";
import PRojectCard from "./Card";
import GlowRadi from "../global/glow";
import {motion, useScroll, useTransform } from "framer-motion";



function Projects({data}) {

  const {scrollYProgress} = useScroll();
  const opacity = useTransform(scrollYProgress, [0.45, 1], [1, 0]);
  // const x = useTransform(scrollYProgress, [0.45, 0.6], [1, -1000]);

  return (
    <div className="w-screen sm:h-screen h-auto" id="projects" style={{opacity}}>
      {/* <div className="absolute -top-4 left-1/4">
        <GlowRadi stop_1={"#03fc4580"} stop_2={"#03fc4500"}/>
      </div> */}
      {/* <div className="absolute -bottom-10 right-4">
        <GlowRadi stop_1={"#ad03fc60"} stop_2={"#ad03fc00"}/>
      </div> */}
      <div className="w-full h-24 pr-8 flex justify-between">
        <Title title={"Past Projects"} />
        <div className="py-4">
          {/* <Icon /> */}
        </div>
      </div>

      <div className="w-full h-[85%] relative flex justify-end items-end">
        <div className="absolute left-6 sm:left-8 top-1 scale-110 sm:top-8">
          <GlowBtn string={"We are the best"} />
        </div>


        <div className="w-full h-5/6 p-4 sm:px-6 px-4 mt-16 flex flex-col sm:flex-row sm:justify-start sm:items-start gap-4">
      
          <PRojectCard />
          <PRojectCard />
          <PRojectCard />
          <PRojectCard />
          <PRojectCard />


        </div>
      </div>
    </div>
  );
}

export default Projects;
