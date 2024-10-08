import dynamic from "next/dynamic";
import Blogs from "@/components/blogs/page";
import Sservices from "@/components/services/indesx";

import Icon from "@/components/global/navbar/Icon";
import Loader from "@/components/global/loader/page"
import { Suspense } from "react";
// import Footer from "@/components/global/Footer";

const HomePage = dynamic(() => import("@/components/home/index"), {ssr: false, loading: () => <Loader />})
const GetAbout = dynamic(() => import("@/components/about/api"), {ssr: true, loading: () => <Loader />})
const GetProjects = dynamic(() => import("@/components/projects/api"), {ssr: true, loading: () => <Loader />})
const Footer = dynamic(() => import("@/components/global/Footer"), {ssr: true, loading: () => <Loader />})

export default function Render() {
  return (
  <Suspense fallback={<Loader />}>
    <div className="relative">
    <Icon />
    <HomePage />
    <GetAbout />
    <GetProjects />
    <Blogs />
    <Footer />
    </div>
    </Suspense>
  );
}
