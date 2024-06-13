"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookNow from "../../components/models/BookNow";
import Internship from "../../components/models/Internship";
import Button from "../../components/ui/Button";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { BookInterview } from "../../components/Interview";
const Interview = () => {
  const [open, setopen] = useState(false);
  const [open1, setopen1] = useState(false);

  const router = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div className="my-5">
      <Slider {...settings} className="pt-3">
        <div>
          <div className="interview d-md-flex justify-content-end py-5">
            <div className="col-xl-6 col-md-6 ps-5 ms-5 d-md-flex d-none justify-content-lg-center justify-content-start">
              <Image
                src="/interview-1.png"
                className="img-fluid position-absolute  interview-bottom"
                style={{ bottom: "-4px" }}
                width={400}
                height={400}
              />
            </div>
            <div className="col-xl-6 col-md-6 col-12 ms-md-0 ms-sm-5 ms-4 ps-md-0 ps-sm-5">
              <h1 className="text-white fw-bolder slider-text display-5 pe-5">
                Are you preparing for
                <br className="d-sm-block d-none" />
                an interview?
              </h1>
              <h4 className="text-white my-1 pe-5">
                Checkout our interview question bank
              </h4>
              <div>
                <Button
                  onClick={() => router.push("/interviewprep")}
                  variant="rounded_sq_red"
                >
                  Checkout <FaArrowRight />
                </Button>
              </div>
            </div>
            <div className="d-md-none d-flex justify-content-lg-center justify-content-center">
              <Image
                src="/interview-1.png"
                className="img-fluid"
                style={{ marginBottom: "-12px" }}
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="interview d-md-flex justify-content-end py-5">
            <div className="col-xl-6 col-md-6 ps-5 ms-5 d-md-flex d-none justify-content-lg-center justify-content-start">
              <Image
                src="/interview-2.png"
                className="img-fluid position-absolute interview-bottom"
                style={{ bottom: "-4px" }}
                width={400}
                height={400}
              />
            </div>
            <div className="col-xl-6 col-md-6 col-12 ms-md-0 ms-sm-5 ms-4 ps-md-0 ps-sm-5">
              <h1 className="text-white fw-bolder  slider-text  display-5 pe-5">
                Hey! On the hunt for
                <br className="d-sm-block d-none" /> an internship?
              </h1>
              <h4 className="text-white my-1 pe-5">
                Woaah! The wait is over. Come join us at DataPlay .
              </h4>
              <div>
                <Button
                  onClick={() => router.push("/interviewprep")}
                  variant="rounded_sq_red"
                >
                  Apply Now
                </Button>
              </div>
            </div>
            <div className="d-md-none d-flex justify-content-lg-center justify-content-center">
              <Image
                src="/interview-2.png"
                className="img-fluid"
                style={{ marginBottom: "-12px" }}
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </Slider>

      <BookInterview />
      <BookNow open={open} onHide={setopen} />
      <Internship open={open1} onHide={setopen1} />
    </div>
  );
};

export default Interview;
