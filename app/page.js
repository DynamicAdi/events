import AboutUs from "@/components/about/page";
import Blogs from "@/components/blogs/page";
import Footer from "@/components/global/Footer";
import Icon from "@/components/global/navbar/Icon";
import Home from "@/components/home/page";
import Projects from "@/components/projects/page";
import Sservices from "@/components/services/indesx";
import GetAbout from "@/components/about/api";

export default function Render() {
  return (
    <div className="relative">
    <Icon />
    <Home />
    <GetAbout />
    <Projects />
    <Sservices />
    <Blogs />
    <Footer />
    </div>
  );
}
