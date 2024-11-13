"use client";

import React, { useRef } from "react";
import Background from "@/components/ui/global/Background";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import SmallLoader from "./global/loader/loader";

const Footer = dynamic(() => import("@/components/ui/global/Footer"), {
  ssr: true,
  loading: () => <SmallLoader />,
});
const SideBar = dynamic(() => import("./ui/global/Navbar"), {
  ssr: true,
  loading: () => <SmallLoader />,
});
const HomeSide = dynamic(() => import("./ui/home/page"), {
  ssr: true,
  loading: () => <SmallLoader />,
});
const GetAbout = dynamic(() => import("./ui/about/GetAbout"), {
  ssr: true,
  loading: () => <SmallLoader />,
});
const GetProjects = dynamic(() => import("./ui/projects/GetProjects"), {
  ssr: true,
  loading: () => <SmallLoader />,
});
const BlogApi = dynamic(() => import("./ui/blogs/GetBlogs"), {
  ssr: true,
  loading: () => <SmallLoader />,
});
const ServicesApi = dynamic(() => import("./ui/services/GetServices"), {
  ssr: true,
  loading: () => <SmallLoader />,
});


function Main() {
  const scrollRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const blogRef = useRef(null);

  
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const homeOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const aboutOpacity = useTransform(scrollYProgress, [0.25, 0.4], [1, 0]);
  const projectsOpacity = useTransform(scrollYProgress, [0.5, 0.6], [1, 0]);
  const servicesOpacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);
  const blogOpacicty = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  const scrollToServices = () =>
    servicesRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <Background>
      <SideBar scrollToServices={scrollToServices} />
      <motion.div
        ref={scrollRef}
        style={{ scrollbarWidth: "none" }}
        className="h-full w-full overflow-y-auto overflow-x-hidden"
      >
        <motion.div
          ref={homeRef}
          className="w-full h-screen sm:sticky top-0 relative"
          style={{ opacity: homeOpacity }}>
          <HomeSide />
        </motion.div>

        <motion.div
          ref={aboutRef}
          className="w-full h-screen sm:sticky top-0 relative"
          style={{ opacity: aboutOpacity }}
        >
          <GetAbout />
        </motion.div>

        <motion.div
          ref={projectsRef}
          className="w-full h-screen sm:sticky relative top-0"
          style={{ opacity: projectsOpacity }}
        >
          <GetProjects />
        </motion.div>

        <motion.div
          ref={servicesRef}
          className="w-full sm:h-screen h-auto sm:sticky top-0 relative"
          style={{ opacity: servicesOpacity }}
        >
          <ServicesApi />
        </motion.div>

        <motion.div
          ref={blogRef}
          className="w-full h-screen"
          style={{ position: "sticky", top: 0, opacity: blogOpacicty }}
        >
          <BlogApi />
        </motion.div>
        <motion.div
          className="w-full sm:h-[40vh] h-full pb-2 sm:pb-0"
          style={{ position: "sticky", top: 0 }}
        >
          <Footer scrollToServices={scrollToServices} />
        </motion.div>
      </motion.div>
    </Background>
  );
}

export default Main;
