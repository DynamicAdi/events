import React from 'react';
import Contact from '@/components/contact/page';
import Footer from "@/components/global/Footer"
import { getPost } from "@/lib/calls";

export const dynamic = 'force-dynamic';
export const dynamicParams = true; 

export default async function ContactUs() {
  const posts = await getPost('connect');

  return (
    <>
    <Contact posts={posts} />
    <Footer posts={posts} />
    </>
  );
}
