import dynamic from "next/dynamic";

import Icon from "@/components/global/navbar/Icon";
import Loader from "@/components/global/loader/page";
import { Suspense } from "react";

const HomePage = dynamic(() => import("@/components/home/index"), {ssr: true, loading: () => <Loader />})
const GetAbout = dynamic(() => import("@/components/about/api"), {ssr: true, loading: () => <Loader />})
const GetProjects = dynamic(() => import("@/components/projects/api"), {ssr: true, loading: () => <Loader />})
const BlogApi = dynamic(() => import("@/components/blogs/api"), {ssr: true, loading: () => <Loader />})
const Footer = dynamic(() => import("@/components/global/Footer"), {ssr: true, loading: () => <Loader />})
const ServicesApi = dynamic(() => import("@/components/services/api"), {ssr: true, loading: ()=> <Loader />})

export default function Render() {
  return (
  <Suspense fallback={<Loader />}>
    <div className="relative">
    <Icon />
    <HomePage />
    <GetAbout />
    <GetProjects />
    <ServicesApi />
    <BlogApi />
    <Footer />
    </div>
    </Suspense>
  );
}
