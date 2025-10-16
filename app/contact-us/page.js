"use client";

import React, { useEffect, useState } from "react";
import Contact from "@/components/contact/page";
import Footer from "@/components/global/Footer";
import { getPost } from "@/lib/calls";
import { useTransition } from "react";
import Loader from "@/components/global/loader/page";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export default function ContactUs() {
  const [posts, setPosts] = useState([]);
  const [transition, startTransition] = useState(true);
  const getData = async () => {
    startTransition(true);
    const post = await getPost("connect");
    if (post) {
      // console.log(post);
      setPosts(post);
      startTransition(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (transition) {
    return <Loader />;
  }
  return (
    <>
      <Contact posts={posts} />
      <Footer posts={posts} />
    </>
  );
}
