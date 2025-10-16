"use client";

import React, { useState, useEffect } from "react";
import { getPost } from "../../lib/calls.js";
import About from "./data";
import Footer from "@/components/global/Footer";
import Loader from "@/components/global/loader/page.jsx";

// export const dynamic = 'force-dynamic';
// export const dynamicParams = true;

export default function AboutUs() {
  const [data, setData] = useState([]);
  const [footer, seFooter] = useState([]);
  const [loader, startLoader] = useState(true);

  const getData = async () => {
    startLoader(true);
    const posts = await getPost("aboutpage");
    const foot = await getPost("connect");
    if (posts) {
      setData(posts);
    }
    if (foot) {
      seFooter(foot);
    }
    startLoader(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loader) {
    return <Loader />;
  }
  return (
    <>
      <About data={data} />
      <Footer posts={footer} />
    </>
  );
}
