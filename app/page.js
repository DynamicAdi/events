import AboutUs from "@/components/about/page";
import Blogs from "@/components/blogs/page";
import Footer from "@/components/global/Footer";
import Home from "@/components/home/page";
import Projects from "@/components/projects/page";
import Sservices from "@/components/services/indesx";

export default function Render() {
  return (
    <>
    <Home />
    <AboutUs />
    <Projects />
    <Sservices />
    <Blogs />
    <Footer />
    </>
  );
}
