"use client";

import React, { useRef } from "react";
import Background from "@/components/ui/global/Background";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Loader from "@/components/global/loader/page";
import Footer from "@/components/ui/global/Footer";

const HomePage = dynamic(() => import("@/components/ui/home/page"), {
  ssr: false,
  loading: () => <Loader />,
});
const GetAbout = dynamic(() => import("@/components/ui/about/GetAbout"), {
  ssr: true,
  loading: () => <Loader />,
});
const GetProjects = dynamic(
  () => import("@/components/ui/projects/GetProjects"),
  { ssr: true, loading: () => <Loader /> }
);
const BlogApi = dynamic(() => import("@/components/ui/blogs/GetBlogs"), {
  ssr: true,
  loading: () => <Loader />,
});
const ServicesApi = dynamic(
  () => import("@/components/ui/services/GetServices"),
  { ssr: true, loading: () => <Loader /> }
);
function Main() {
  const scrollRef = useRef(null);
  const {scrollYProgress} = useScroll({ container: scrollRef });
  const homeOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const aboutOpacity = useTransform(scrollYProgress, [0.25, 0.4], [1, 0]);
  const projectsOpacity = useTransform(scrollYProgress, [0.5, 0.6], [1, 0]);
  const servicesOpacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);
  const blogOpacicty = useTransform(scrollYProgress, [0.8, 1], [1, 0]);


  return (
    <Background>
      <div
        ref={scrollRef}
        style={{ scrollbarWidth: "none" }}
        className="h-full w-full overflow-y-auto"
      >
        <motion.div
          className="w-full h-screen pt-24 sm:sticky top-0 relative"
          style={{opacity: homeOpacity }}
        >
          <HomePage />
        </motion.div>

        <motion.div
          className="w-full h-screen pt-28 sm:sticky top-0 relative"
          style={{opacity: aboutOpacity  }}
        >
          <GetAbout />
        </motion.div>

        <motion.div
          className="w-full h-screen pt-28 sm:sticky relative top-0"
          style={{ opacity: projectsOpacity  }}
        >
          <GetProjects />
        </motion.div>

        <motion.div
          className="w-full sm:h-screen h-auto pt-28 sm:sticky top-0 relative"
          
          style={{ opacity: servicesOpacity  }}
        >
          <ServicesApi />
        </motion.div>

        <motion.div
          className="w-full h-screen pt-32"
          
          style={{ position: "sticky", top: 0, opacity: blogOpacicty  }}
        >
          <BlogApi />
        </motion.div>
      <motion.div className="w-full h-[40vh] pt-28" style={{position: "sticky", top: 0}}> 
        <Footer />
      </motion.div>
      
      </div>
    </Background>
  );
}


export default Main;
