"use client";
import React from "react";
import Image from "next/image";
import Footer from "../../components/Footer";
import getTestimonial from "../../lib/getTestimonial";
import OurStudentsSpeak from "../../components/testimonial/OurStudentsSpeak";
import { FaLocationDot } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DealHeader from "../home/DealHeader";
import Slider from "react-slick";
import { PageWrapper } from "../../components/common/PageWrapper/PageWrapper";
import { ABOUT_CONTENT, GALLERY } from "../../utilities/constants";
import { SectionHeader } from "../../components/common/HeaderCard/section-header";
import { ImageCard } from "../../components/common/image-card";

const AboutUs = ({ testimonials }) => {
  const gallery = [1, 2, 3, 4, 5, 6, 7];
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
  return (
    <>
      <PageWrapper title={"About Us"}>
        <div className="about-sec">
          <div className="about-content custom-container">
            <div className="custom-container">
              <h1>Your Compass On The Data Science Journey.</h1>
              {ABOUT_CONTENT.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>

            <Image
              alt="Founders"
              src="/about-us.png"
              width={500}
              height={400}
            />
          </div>
          <div className="apply"></div>
        </div>

        <div className="apply d-lg-flex justify-content-end py-5 mt-5 position-relative ">
          <div className="col-lg-4 ps-5 ms-5 d-lg-flex d-none justify-content-lg-center justify-content-start">
            <Image
              alt="hey"
              src="/apply.png"
              className="img-fluid position-absolute "
              style={{ bottom: 4 }}
              width={400}
              height={400}
            />
          </div>
          <div className="col-lg-8 col-12 ms-xl-0 ms-lg-5 ps-5">
            <h1 className="text-white fw-bolder display-5">Who can apply?</h1>
            <h3 className="text-white my-1">
              Absolutely{" "}
              <span className="ms-2 me-2 position-relative text-white">
                <span
                  className="pe-3"
                  style={{ zIndex: 10, position: "relative" }}
                >
                  EVERYONE!
                </span>
                <Image
                  src="/everyone-vector.svg"
                  alt="Logo"
                  className="position-absolute img-fluid "
                  style={{ left: "-8px", top: "-5px" }}
                  width={180}
                  height={70}
                />
              </span>{" "}
              All Backgrounds, All Levels.
            </h3>
            <p className="mt-3 text-white small">
              Whether you're a high school goer, college explorer, or industry
              expert, DataPlay is your <br /> learning playground!
            </p>
            <div className="bg-outer rounded-pill bg-purple mt-4 pt w-fit cursor-pointer">
              <div
                className="bg-inner rounded-pill py-1"
                style={{ backgroundColor: "#FF4C3D" }}
              >
                <a
                  className="m-0 px-4 text-white fw-medium py-2 h6"
                  href="/contact"
                >
                  <small>Contact Us</small>
                </a>
              </div>
            </div>
          </div>
          <div className="d-lg-none d-flex justify-content-lg-center justify-content-center">
            <Image
              src="/apply.png"
              className="img-fluid"
              style={{ marginBottom: "-12px" }}
              width={400}
              height={400}
              alt="hey"
            />
          </div>
        </div>
        <section className="container my-5">
          <SectionHeader
            underlineHeader={`OUR GALLERY`}
            title={`Our Gallery`}
            subtitle={"Visualizing knowledge through our gallery."}
          />
          <div className="gallery">
            <div className="gallery-item">
              {GALLERY.map((item, idx) => {
                return idx < 2 ? (
                  <ImageCard
                    src={item.img}
                    width={300}
                    height={400}
                    alt="gallery pics"
                  />
                ) : null;
              })}
            </div>
            <div className="gallery-item">
              {GALLERY.map((item, idx) => {
                return idx >= 2 && idx < 5 ? (
                  <ImageCard
                    src={item.img}
                    width={300}
                    height={400}
                    alt="gallery pics"
                  />
                ) : null;
              })}
            </div>
            <div className="gallery-item">
              {GALLERY.map((item, idx) => {
                return idx >= 5 ? (
                  <ImageCard
                    src={item.img}
                    width={300}
                    height={400}
                    alt="gallery pics"
                  />
                ) : null;
              })}
            </div>
          </div>
          {/* <div className="d-flex flex-column align-items-center">
            <div className="bg-lightpurple px-3 py-1 fw-semibold mt-5 text-white rounded-pill w-fit">
            OUR GALLERY
            </div>
            <h2 className="fw-bolder h1 mt-2 ">Our Gallery</h2>
            <p className="fw-medium mb-4">
              Visualizing knowledge through our gallery.
            </p>
          </div>
          <div className="d-xl-flex d-none flex-wrap cursor-pointer ">
            {gallery?.map((val, index) => {
              return (
                <div
                  key={index}
                  className="col-xl-3 col-lg-4 col-md-6 col-12 p-3"
                  data-aos="fade-up"
                >
                  <div
                    className="rounded-5 bg-outer"
                    style={{
                      backgroundColor: `${
                        index == 0
                          ? "#8073E5"
                          : index % 2 == 0
                          ? "#1D164F"
                          : index % 3 == 1
                          ? "#FF4C3D"
                          : "#005F81"
                      }`,
                    }}
                  >
                    <div
                      className="bg-inner bg-white rounded-5 p-3"
                      style={{
                        border: `${
                          index == 0
                            ? "1px solid #8073E5"
                            : index % 2 == 0
                            ? "1px solid #1D164F"
                            : index % 3 == 1
                            ? "1px solid #FF4C3D"
                            : "1px solid #005F81"
                        }`,
                      }}
                    >
                      <div className="our-img-card position-relative ">
                        <div
                          className="position-absolute d-flex justify-content-between align-items-center w-100 ps-1"
                          style={{ bottom: "-10px" }}
                        >
                          <div
                            className="bg-outer rounded-pill"
                            style={{
                              backgroundColor:
                                index % 2 == 0 ? "#CD9607" : "#1C1A4A",
                            }}
                          >
                            <div
                              className="bg-inner rounded-pill py-1 text-white px-3 fw-medium"
                              style={{
                                backgroundColor:
                                  index % 2 == 0 ? "#FFC224" : "#8073E5",
                              }}
                            >
                              25-June-2024
                            </div>
                          </div>
                        </div>
                        <Image
                          src="/blog1.png"
                          width={100}
                          height={190}
                          alt="our-couese"
                          className="w-100"
                        />
                      </div>
                      <div className="courses-content ms-1">
                        <h6
                          className="purple fw-bold my-2 mt-4"
                          style={{ fontSize: 18 }}
                        >
                          Data Science And Analytics Foundation Course
                        </h6>
                        <div className="d-flex justify-content-between align-items-center text-black-50 ">
                          <div className="fw-medium">
                            <FaLocationDot className="me-1 mb-1" />
                            <small>Rothak, India</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div> */}
          {/* <Slider {...settings} className="pt-3 d-xl-none">
            {gallery?.map((val, index) => {
              return (
                <div
                  key={index}
                  className="col-xl-3 col-lg-4 col-md-6 col-12 p-3"
                  data-aos="fade-up"
                >
                  <div
                    className="rounded-5 bg-outer"
                    style={{
                      backgroundColor: `${
                        index == 0
                          ? "#8073E5"
                          : index % 2 == 0
                          ? "#1D164F"
                          : index % 3 == 1
                          ? "#FF4C3D"
                          : "#005F81"
                      }`,
                    }}
                  >
                    <div
                      className="bg-inner bg-white rounded-5 p-3"
                      style={{
                        border: `${
                          index == 0
                            ? "1px solid #8073E5"
                            : index % 2 == 0
                            ? "1px solid #1D164F"
                            : index % 3 == 1
                            ? "1px solid #FF4C3D"
                            : "1px solid #005F81"
                        }`,
                      }}
                    >
                      <div className="our-img-card position-relative ">
                        <div
                          className="position-absolute d-flex justify-content-between align-items-center w-100 ps-1"
                          style={{ bottom: "-10px" }}
                        >
                          <div
                            className="bg-outer rounded-pill"
                            style={{
                              backgroundColor:
                                index % 2 == 0 ? "#CD9607" : "#1C1A4A",
                            }}
                          >
                            <div
                              className="bg-inner rounded-pill py-1 text-white px-3 fw-medium"
                              style={{
                                backgroundColor:
                                  index % 2 == 0 ? "#FFC224" : "#8073E5",
                              }}
                            >
                              25-June-2024
                            </div>
                          </div>
                        </div>
                        <Image
                          src="/blog1.png"
                          width={100}
                          height={190}
                          alt="our-couese"
                          className="w-100"
                        />
                      </div>
                      <div className="courses-content ms-1">
                        <h6
                          className="purple fw-bold my-2 mt-4"
                          style={{ fontSize: 18 }}
                        >
                          Data Science And Analytics Foundation Course
                        </h6>
                        <div className="d-flex justify-content-between align-items-center text-black-50 ">
                          <div className="fw-medium">
                            <FaLocationDot className="me-1 mb-1" />
                            <small>Rothak, India</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider> */}
        </section>
        <OurStudentsSpeak testimonials={testimonials} />
      </PageWrapper>
      
    </>
  );
};

export default AboutUs;

export async function getServerSideProps() {
  try {
    const testimonials = await getTestimonial();

    return { props: { testimonials } };
  } catch (error) {
    console.log(error);
  }
}
