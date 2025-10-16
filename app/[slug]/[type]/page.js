"use client";

import React, { useEffect, useState } from "react";
import Details from "@/components/details/page";
import { getPost } from "@/lib/calls";
import Loader from "@/components/global/loader/page";

export default async function Slug({ params }) {
  const { slug, type } = params;

  const [posts, setPosts] = useState([]);
  const [footer, seFooter] = useState([]);
  const [more, setMore] = useState([]);
  const [loader, startLoader] = useState(true);

  const getData = async () => {
    startLoader(true);
    const posts = await getPost("fullProjects", slug, type);
    const mor = await getPost("projects");
    const foot = await getPost("connect");

    if (posts) {
      setPosts(posts);
    }
    if (foot) {
      seFooter(foot);
    }
    if (more) {
      setMore(mor);
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
      <Details data={posts} more={more} footer={footer} />
    </>
  );
}
