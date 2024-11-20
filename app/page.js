import React from "react";
import ClientRender from "@/components/ClientRender";
import { getData } from "@/core/page";

export const dynamic = 'force-dynamic';

export default async function Main() {
  const about = await getData("about");
  const services = await getData("services");
  const blogs = await getData("blogcard");
  const projects = await getData("projects");
  const footer = about[0].contactInformation;
  const socialMedia = about[0].socialMediaLinks;

  return (
    <ClientRender about={about} services={services} blogs={blogs} projects={projects} footer={footer} socialMedia={socialMedia} />
  );
}
