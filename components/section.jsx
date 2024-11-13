// Section.js
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Section({ children, opacityRange }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: sectionRef });
  const opacity = useTransform(scrollYProgress, opacityRange, [1, 0]);

  return (
    <motion.div ref={sectionRef} style={{ opacity }} className="w-full h-screen sm:sticky top-0 relative">
      {children}
    </motion.div>
  );
}
