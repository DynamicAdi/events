import React from "react";
import ClientRender from "@/components/ClientRender";
import { getPost } from "@/lib/calls";
export const dynamic = 'force-dynamic';
export const dynamicParams = true; 

export default async function Main() {
  const about = await getPost("about");
  const services = await getPost("services");
  const blogs = await getPost("blogcard");
  const projects = await getPost("projects");
  const footer = about[0].contactInformation;
  const socialMedia = about[0].socialMediaLinks;

  return (
    <ClientRender about={about} services={services} blogs={blogs} projects={projects} footer={footer} socialMedia={socialMedia} />
  );
}
