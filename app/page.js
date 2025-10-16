"use client";

import React, { useState, useEffect } from "react";
import ClientRender from "@/components/ClientRender";
import { getPost } from "@/lib/calls";
import Loader from "@/components/global/loader/page";
export const dynamic = "force-dynamic";
export const dynamicParams = true;

export default function Main() {
  const [about, setAbout] = useState([]);
  const [services, setServices] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [footer, setFooter] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);
  const [loader, startLoader] = useState(true);

  const getData = async () => {
    startLoader(true);
    const abt = await getPost("about");
    setAbout(abt);
    const serv = await getPost("services");
    setServices(serv);
    const blog = await getPost("blogcard");
    setBlogs(blog);
    const project = await getPost("projects");
    setProjects(project);
    if (abt) {
      const foot = abt[0].contactInformation;
      setFooter(foot);
      const social = abt[0].socialMediaLinks;
      setSocialMedia(social);
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
    <ClientRender
      about={about}
      services={services}
      blogs={blogs}
      projects={projects}
      footer={footer}
      socialMedia={socialMedia}
    />
  );
}
