"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import getTestimonial from "../lib/getTestimonial";
import DealHeader from "./home/DealHeader";
import HomeBanner from "./home/HomeBanner";
import Services from "./home/Services";
import RoadMap from "./home/RoadMap";
import DataplayCources from "../components/DataplayCources";
import Mentors from "./home/Mentors";
import getCourses from "../lib/getCourses";
import getMentor from "../lib/getInstructors";
import OurStudentsSpeak from "../components/testimonial/OurStudentsSpeak";
import DataScience from "./home/DataScience";
import Interview from "./home/Interview";
import Blogs from "./home/Blogs";
import OurTestimonials from "../components/testimonial/OurTestimonials";
import { useDispatch, useSelector } from "react-redux";
import UserDetailModal from "../components/models/UserDetailModal";
import LoginModel from "../components/models/LoginModel";
import { setLoginModel } from "../store/redux/genaralSlice";
import { IndustryLeaderSec } from "../components/industry-leader";

const MockinterviewBooktest = ({ testimonials, courses, mentors }) => {
  const [open, setopen] = useState(false);
  const [open1, setopen1] = useState(false);

  const dispatch = useDispatch();
  const toggleLoginModal = useSelector((state) => state.loginStatemodal);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const name = localStorage.getItem("username");
    if (token) {
      // return;
      if (name) {
        return;
      } else {
        setopen(true);
      }
    } else {
      setopen1(true);
    }
  }, []);
  return (
    <>
      <DealHeader />
      <div className="home-page-header">
        <Header />
      </div>
      <HomeBanner />
      <Services />
      <DataScience />
      {/* <RoadMap /> */}
      {/* <BestCources /> */}
      {/* <IndustryLeaderSec /> */}
      {courses ? <DataplayCources courses={courses} /> : null}
      <Interview />
      <Mentors mentors={mentors} />
      <div id="blogs">
        <Blogs />
      </div>
      {/* <OurTestimonials/> */}
      <OurStudentsSpeak testimonials={testimonials} />
      <Footer />
      <LoginModel onHide={() => setopen1(false)} open={open1} />
      <UserDetailModal onHide={setopen} open={open} />
    </>
  );
};

export default MockinterviewBooktest;

export async function getServerSideProps() {
  try {
    const testimonialData = getTestimonial();
    const courseData = getCourses();
    const mentorData = getMentor();
    const [testimonials, courses, mentors] = await Promise.all([
      testimonialData,
      courseData,
      mentorData,
    ]);
    return {
      props: { testimonials: testimonials, courses: courses, mentors: mentors },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { testimonials: [], courses: [], mentors: [] },
    };
  }
}
