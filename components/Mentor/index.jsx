import { SectionHeader } from "../common/HeaderCard/section-header";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import MentorModel from "../../components/models/MentorModel";
import MentorsDescription from "../../pages/home/MentorsDescription";
import { FaArrowRight, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import { MENTORS } from "../../utilities/constants";
import { MentorCard } from "./mentor-card";

export const MentorSec = ({ mentors }) => {
  const [open, setOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(false);

  const handleMentorSelect = (data) => {
    setSelectedMentor(data);
    setOpen(true);
  };

  console.log('mentors -> ', mentors)
  return (
    <div className="custom-container">
      <SectionHeader
        underlineHeader={`Mentors`}
        title={`Our Mentors`}
        subtitle={`Guiding minds towards brilliance and success.`}
      />

      <div className="mentor-sec">
        {mentors?.map((item, idx) => (
          <MentorCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};
