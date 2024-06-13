import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegUser } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { useRouter } from "next/router";
import { BLOGS } from "../../utilities/constants";
import Link from "next/link";
import { BlogCard } from "../Blogs/blog-card";

const BlogsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const router = useRouter();
  return (
    <div className="blog-card-sec">
        {BLOGS.map((item, idx) => (
          <BlogCard {...item} />
        ))}
    </div>
  );
};

export default BlogsSlider;
