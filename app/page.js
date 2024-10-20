import dynamic from "next/dynamic";
import Loader from "@/components/global/loader/page";
import { Suspense } from "react";

const HomePage = dynamic(() => import("@/components/ui/home/page"), {ssr: false, loading: () => <Loader />})
const GetAbout = dynamic(() => import("@/components/ui/about/GetAbout"), {ssr: true, loading: () => <Loader />})
const GetProjects = dynamic(() => import("@/components/ui/projects/GetProjects"), {ssr: true, loading: () => <Loader />})
const BlogApi = dynamic(() => import("@/components/ui/blogs/GetBlogs"), {ssr: true, loading: () => <Loader />})
const ServicesApi = dynamic(() => import("@/components/ui/services/GetServices"), {ssr: true, loading: ()=> <Loader />})
const Footer = dynamic(() => import("@/components/global/Footer"), {ssr: true, loading: () => <Loader />})
const Main = dynamic(() => import("@/components/Main"), {ssr: true, loading: () => <Loader />})

export default function Render() {
  return (
  <Suspense fallback={<Loader />}>
    <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden">
      <Main />
    </div>
    </Suspense>
  );
}
