import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Image from "next/image";
import getTestimonial from "../../../lib/getTestimonial";
import Footer from "../../../components/Footer";
import getCourses from "../../../lib/getCourses";
import { getCoursContent } from "../../../lib/client/clientApis";
import { FcGoogle } from "react-icons/fc";
import ContentDescription from "./CourseDescription";
import ContentDescriptionLocked from "./CourseDescriptionLocked";
import Link from "next/link";
import OurStudentsSpeak from "../../../components/testimonial/OurStudentsSpeak";
import DealHeader from "../../home/DealHeader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import courseResponse from "../../../lib/courseResponse";
import { CourseCard } from "../../../components/Courses/CourseCard";
import { FaCheck } from "react-icons/fa6";
import { COURSE_INCLUDE } from "../../../utilities/constants";
import { Accordion } from "react-bootstrap";

const CourseDetailPage = ({ testimonials, maincourse, course_id }) => {
  const courseLearnig = maincourse?.learn?.replace("\r", "").split("\n");
  const courseRequireMent = maincourse?.requirements
    ?.replace("\r", "")
    .split("\n");
  const [showMore, setShowMore] = useState("");
  const [courseContent, setCourseContent] = useState("");
  const [token, setToken] = useState("");
  const myLoader = ({ src }) => {
    return `${src}`;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    arrows: true,
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

  console.log(`maincourse`, maincourse);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      setToken(accessToken);
    }
    getCoursContent(course_id, accessToken).then((res) => {
      setCourseContent(res);
    });
    // console.log("Setting course content to--->", courseResponse)

    // setCourseContent(courseResponse)
    // if (accessToken) {
    //   setToken(accessToken)
    // }
  }, []);

  function viewCourseHandler() {
    setViewCourse(true);
  }
  const showMoreData = (length) => {
    setShowMore(!showMore);
  };

  return (
    <>
      <DealHeader />
      <div className="home-page-header">
        <Header />
      </div>
      <div className="pt-5 pb-4"></div>
      <div className="course-detail-banner justify-content-center px-5 d-flex flex-column ">
        <div className="course-detail custom-container">
          <p className="">
            Home {" >  "}
            <span className="pink">{maincourse?.title}</span>
          </p>
          <h1 className="">{maincourse?.title}</h1>
          <p>{maincourse?.description}</p>
          <p>
            Instructor:{" "}
            {maincourse?.instructors.map((item, idx) => (
              <span key={idx}>
                <b>{item} </b>
              </span>
            ))}
          </p>
        </div>
        <div className="course-detail-card">
          <CourseCard {...maincourse} />
        </div>
      </div>
      <div className="custom-container mt-3">
        <h4>What you will learn:</h4>
        <div className="course-detail-learn-sec">
          <span className="course-detail-learn">
            <FaCheck size={50} />
            <p>{maincourse?.learn}</p>
          </span>
        </div>
      </div>
      <div className="custom-container mt-3">
        <h4>This course includes:</h4>
        <div className="course-detail-includes">
          {COURSE_INCLUDE.map((item, idx) => (
            <span key={idx} className="course-detail-learn">
              <Image src={item.img} alt={item.title} height={30} width={30} />
              <p>{item.title}</p>
            </span>
          ))}
        </div>
      </div>
      <div className="custom-container mt-3">
        <h4>Requirements:</h4>
        <div className="course-detail-req">
          <ul>
            {/* <li>
              {maincourse?.requirements}
            </li> */}
            <li>
              No programming experience needed - I'll teach you everything you
              need to know.
            </li>
            <li>A computer with access to the internet</li>
            <li>No paid software required</li>
          </ul>
        </div>
      </div>
      
      <section className="course-detail-page-content">
        <div className="container">
          <div className="d-lg-flex">
            <div className="col-lg-6">
              {courseContent.unlocked?.length ||
              courseContent.locked?.length ? (
                <div
                  className="what-learn-card course-content anchor"
                  id="course_content"
                >
                  <div className="d-flex align-items-center justify-content-between course-header">
                    <h3>Course Content</h3>
                    <h4 className="lectures-count">
                      {courseContent.locked?.length +
                        courseContent.unlocked?.length}{" "}
                      Lectures<span>{maincourse.course_duration} Days</span>
                    </h4>
                  </div>

                  <div className="course-list">
                    <Accordion className="border border-0" defaultActiveKey="0">

                    {courseContent.unlocked.map((course, index) => (
                      <ContentDescription
                        token={token}
                        course={course}
                        key={index}
                        idx={index}
                        />
                      ))}

                    {showMore
                      ? courseContent.locked.map((course, index) => (
                        <ContentDescriptionLocked
                        course={course}
                        maincourse={maincourse}
                        key={index}
                        idx={index}
                        />
                      ))
                      : courseContent.locked
                      .slice(0, 2)
                      .map((course, index) => (
                        <ContentDescriptionLocked
                        course={course}
                        maincourse={maincourse}
                        key={index}
                        />
                      ))}
                      </Accordion>
                  </div>
                  {courseContent.locked.length > 1 && (
                    <div className="show-more-learn">
                      <button
                        className={`show-btn${showMore ? " show-less" : ""}`}
                        onClick={() =>
                          showMoreData(courseContent.locked.length)
                        }
                      >
                        {showMore ? "Show less" : "Show more"}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                !courseContent.unlocked?.length &&
                !courseContent.locked?.length && (
                  <section className="coming-soon-page">
                    <div className="container">
                      <h3>
                        <span className="light-coming">Coming</span>{" "}
                        <span>Soon</span> !
                      </h3>
                    </div>
                  </section>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {testimonials && <OurStudentsSpeak testimonials={testimonials} />}
      <Footer />
    </>
  );
};

export default CourseDetailPage;

export async function getServerSideProps({ params }) {
  try {
    const testimonialData = getTestimonial();
    const coursesData = getCourses();
    const [courses, testimonials] = await Promise.all([
      coursesData,
      testimonialData,
    ]);
    let currentCourse = null;
    for (let i = 0; i < courses.length; i++) {
      if (params.slug == courses[i].id) {
        currentCourse = courses[i];
      }
    }
    return {
      props: {
        testimonials,
        maincourse: currentCourse,
        course_id: params.slug,
      },
    };
  } catch (error) {
    console.log(error);
    return
  }
}
