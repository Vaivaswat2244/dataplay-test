import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CourseCard } from "./Courses/CourseCard";
import { COURSES } from "../utilities/constants";
import { SectionHeader } from "./common/HeaderCard/section-header";
import { CgChevronRight, CgMoveRight } from "react-icons/cg";
import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";
const DataplayCources = ({ courses }) => {
  const router = useRouter();
  const myLoader = ({ src }) => {
    return `${src}`;
  };

  // console.log('courses -> ', courses[0])

  // console.log("first", courses);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const courses = courses?.slice(0, 3);

  return (
    <div className="custom-container">
      <div className="course_sec">
        <SectionHeader
          underlineHeader={`Courses`}
          title={`Industry Expert Certified`}
          subtitle={`Your ultimate comprehensive and tailored solutions.`}
        />

        <div className="course_cards_sec">
          {/* <Slider {...settings}> */}
          {courses.map((item, idx) => {
            if (idx < 3) {
              return <CourseCard key={idx} {...item} />;
            }
          })}
          {/* </Slider> */}
        </div>
        <Link href={`/course`} className="view-more">
          <span>View All Courses</span>
          <LuMoveRight className="right-icon" size={30} />
        </Link>
      </div>
    </div>
  );
};

export default DataplayCources;
