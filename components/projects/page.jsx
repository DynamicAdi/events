"use client";

import React from "react";
import GlowBtn from "../global/GlowBtn";
import Title from "../global/Title";
import PRojectCard from "./Card";
import GlowRadi from "../global/glow";
import {motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";



function Projects({data}) {

  const {scrollYProgress} = useScroll();
  const opacity = useTransform(scrollYProgress, [0.45, 1], [1, 0]);

  return (
    <div className="w-screen sm:h-screen h-auto" id="projects" style={{opacity}}>
      <div className="w-full h-24 pr-8 flex justify-between">
        <Title title={"Past Projects"} />
      </div>

      <div className="w-full h-[85%] relative flex justify-end items-end">
        <div className="absolute left-6 sm:left-8 top-1 scale-110 sm:top-8">
          <GlowBtn string={"We are the best"} />
        </div>


        <div className="w-full h-5/6 p-4 sm:px-6 px-4 mt-16 flex flex-col sm:flex-row sm:justify-start sm:items-start gap-4">
        {
          data.map((item) => (
          <Link href={`/${item.slug.current}/${item._type}`}>
            <PRojectCard key={item._id} title={item.title} image={item.image} png={item.pngimage[0]} description={item.minidesc} />
          </Link>
          ))
        }
        </div>
      </div>
    </div>
  );
}

export default Projects;
