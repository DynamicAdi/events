import React from 'react'
import {getPost} from "../../lib/calls";
import About from "./data";
import Footer from "@/components/global/Footer";

export const dynamic = 'force-dynamic';

async function AboutUs() {
    const posts = await getPost('aboutpage');
    const footer = await getPost('connect');
  return (
    <>
    <About data={posts}/>
    <Footer posts={footer}/>
    </>
  )
}

export default AboutUs