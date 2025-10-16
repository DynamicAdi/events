import React from "react";
import Details from "@/components/details/page";
import BlogDetails from "@/components/details/blogDetails";
import { getPost } from "../../../lib/calls";
import Loader from "@/components/global/loader/page";

export default function Blogs() {
  const [data, setData] = useState([]);
  const [more, seFooter] = useState([]);
  const [loader, startLoader] = useState(true);

  const getData = async () => {
    startLoader(true);
    const posts = await getPost("fullBlog");
    const mor = await getPost("blogcard");
    if (posts) {
      setData(posts);
    }
    if (mor) {
      seFooter(mor);
    }
    startLoader(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loader) {
    return <Loader />;
  }
  return (
    <>
      <BlogDetails data={data} more={more} />
    </>
  );
}
