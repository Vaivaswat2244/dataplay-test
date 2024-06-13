import React from "react";
import OurStudentsSpeak from "../../components/testimonial/OurStudentsSpeak";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import getCourses from "../../lib/getCourses";
import getTestimonial from "../../lib/getTestimonial";
import { PageWrapper } from "../../components/common/PageWrapper/PageWrapper";
import { CourseCard } from "../../components/Courses/CourseCard";

const Courses = ({ courses, testimonials }) => {
  console.log(`courses -> `, courses);

  return (
    <PageWrapper title={`Courses`} subtitle={``}>
      <div className="custom-container">
        <div className="course_cards_page">
          {/* <Slider {...settings}> */}
          {courses ? (courses.map((item, idx) => {
            return <CourseCard key={idx} {...item} />;
          })) : (
            <div className="text-center align-items-center d-flex justify-content-center w-100">Updating Courses Soon...</div>
          )}
          {/* </Slider> */}
        </div>
      </div>
      <OurStudentsSpeak testimonials={testimonials} />
    </PageWrapper>
  );
};

export default Courses;

export async function getServerSideProps() {
  try {
    const coursesData = getCourses();
    const testimonialData = getTestimonial();
    const [courses, testimonials] = await Promise.all([
      coursesData,
      testimonialData,
    ]);
    return { props: { courses, testimonials } };
  } catch (error) {
    console.log(error);
    return {
      props: {
        courses: [], testimonials: []
      }
    };
  }
}
