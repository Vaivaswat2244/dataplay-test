import React, { use, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurStudentsDescription from "./OurStudentsDescription";
import { SectionHeader } from "../common/HeaderCard/section-header";
import { TestimonialCard } from "./testimonial-card";
import Image from "next/image";
import { API_BASE_URL } from "../../utilities/constants";

const OurStudentsSpeak = ({ testimonials }) => {
  // console.log("testimonils -> ", testimonials);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
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
  return (
    <>
      <section className="custom-container my-5">
        <SectionHeader
          underlineHeader={`TESTIMONIALS`}
          title={`Our Students Speak`}
          subtitle={"Transformative Testimonials from our Champions"}
        />
        <div className="slider-testimonial" >
          <Slider {...settings}>
            {testimonials?.map((item, idx) => (
              <TestimonialCard key={idx} {...item} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default OurStudentsSpeak;
