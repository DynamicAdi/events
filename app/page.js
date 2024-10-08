import Blogs from "@/components/blogs/page";
import Footer from "@/components/global/Footer";
import Icon from "@/components/global/navbar/Icon";
import Sservices from "@/components/services/indesx";
import GetAbout from "@/components/about/api";
import HomePage from "@/components/home/index"
import GetProjects from "@/components/projects/api";

export default function Render() {
  return (
    <div className="relative">
    <Icon />
    <HomePage />
    {/* <Home /> */}
    <GetAbout />
    <GetProjects />
    {/* <Projects /> */}
    {/* <Sservices /> */}
    <Blogs />
    <Footer />
    </div>
  );
}
