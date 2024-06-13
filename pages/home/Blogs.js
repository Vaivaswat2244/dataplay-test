import Image from "next/image";
import { useRouter } from "next/router";
import { FaArrowRight, FaStar } from "react-icons/fa";
import BlogsSlider from "../../components/sliders/BlogsSlider";
import { BlogSec } from "../../components/Blogs";

const Blogs = ({ courses }) => {
  const router = useRouter();
  const myLoader = ({ src }) => {
    return `${src}`;
  };

  const filteredCourses = courses?.slice(0, 3);
  return <BlogSec />;
};

export default Blogs;
