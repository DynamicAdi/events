"use client";

import React, { useRef } from "react";
import Background from "@/components/ui/global/Background";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Loader from "@/components/global/loader/page";
import Footer from "@/components/ui/global/Footer";
import SideBar from "./ui/global/Navbar";

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
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const blogRef = useRef(null);

  const {scrollYProgress} = useScroll({ container: scrollRef });
  const homeOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const aboutOpacity = useTransform(scrollYProgress, [0.25, 0.4], [1, 0]);
  const projectsOpacity = useTransform(scrollYProgress, [0.5, 0.6], [1, 0]);
  const servicesOpacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);
  const blogOpacicty = useTransform(scrollYProgress, [0.9, 1], [1, 0]);


  const scrollToHome = () => homeRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToProjects = () => projectsRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToServices = () => servicesRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToBlog = () => blogRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <Background scrollToTop={scrollToHome}>
    <SideBar 
      scrollToHome={scrollToHome}
      scrollToAbout={scrollToAbout}
      scrollToProjects={scrollToProjects}
      scrollToServices={scrollToServices}
      scrollToBlog={scrollToBlog}
    />
      <div
        ref={scrollRef}
        style={{ scrollbarWidth: "none" }}
        className="h-full w-full overflow-y-auto"
      >
        <motion.div
        ref={homeRef}
          className="w-full h-screen pt-24 sm:sticky top-0 relative"
          style={{opacity: homeOpacity }}
        >
          <HomePage />
        </motion.div>

        <motion.div
        ref={aboutRef}
          className="w-full h-screen pt-28 sm:sticky top-0 relative"
          style={{opacity: aboutOpacity  }}
        >
          <GetAbout />
        </motion.div>

        <motion.div
        ref={projectsRef}
          className="w-full h-screen pt-28 sm:sticky relative top-0"
          style={{ opacity: projectsOpacity  }}
        >
          <GetProjects />
        </motion.div>

        <motion.div
        ref={servicesRef}
          className="w-full sm:h-screen h-auto pt-28 sm:sticky top-0 relative"
          
          style={{ opacity: servicesOpacity  }}
        >
          <ServicesApi />
        </motion.div>

        <motion.div
        ref={blogRef}
          className="w-full h-screen pt-28"
          
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
