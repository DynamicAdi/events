"use client";

import React, {useState, useEffect} from "react";
import ClientRender from "@/components/ClientRender";
import { getPost } from "@/lib/calls";
export const dynamic = 'force-dynamic';
export const dynamicParams = true; 

export default async function Main() {
  const [about, setAbout] = useState([]);  
  const [services, setServices] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [footer, setFooter] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);

  const getData = async () => {
      const abt = await getPost("about");
    setAbout(abt)
  const serv = await getPost("services");
    setServices(serv)
  const blog = await getPost("blogcard");
    setBlogs(blog)
  const project = await getPost("projects");
    setProjects(project)
  const foot = about[0].contactInformation;
    setFooter(foot)
  const social = about[0].socialMediaLinks;
    setSocialMedia(social)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <ClientRender about={about} services={services} blogs={blogs} projects={projects} footer={footer} socialMedia={socialMedia} />
  );
}
