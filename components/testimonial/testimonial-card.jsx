"use client";
import Image from "next/image";
import { API_BASE_URL } from "../../utilities/constants";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import TestimonialModel from "../models/TestimonialModel";
import { useState } from "react";

export const TestimonialCard = ({
  id,
  author,
  content,
  created_at,
  profile,
  prevorg,
  prevrole,
  currorg,
  currrole,
  linkdin,
}) => {
  const props = {
    id,
    author,
    content,
    created_at,
    profile,
    prevorg,
    prevrole,
    currorg,
    currrole,
    linkdin,
  };

  // let social = linkdin;
  // const socialArr = social.split("/");
  // social = socialArr[socialArr.length - 2];

  const [open, setOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(false);

  // get testimonial data and open popup
  const handleTestimonialSelect = (data) => {
    setSelectedTestimonial(data);
    setOpen(true);
  };

  return (
    <>
      <div className="testimonial-parent">
        <Image
          src={"/assets/images/testimonial/testimonial-arrow.svg"}
          height={100}
          width={200}
          className="arrow"
        />
        <div className="testimonial">
          <div className="client-roles">
            <div className="client-role prev-role">
              <div className="role">{prevrole}</div>
              <div className="org">{prevorg}</div>
            </div>
            <div className="client-role curr-role">
              <div className="role">{currrole}</div>
              <div className="org">{currorg}</div>
            </div>
          </div>
          <div className="client-review">
            <p className="review">
              {content.slice(0, 200)}
              {content.length > 200 && (
                <span
                  className="review-read-more"
                  onClick={() => handleTestimonialSelect(props)}
                >
                  ...Read More
                </span>
              )}
            </p>
            <div className="client-avatar">
              <Image
                src={`${profile}`}
                height={100}
                width={100}
                alt={author}
              />
              <div className="client-details">
                <p className="client-name">{author}</p>
                {/* {social ? (
                  <p className="client-social">
                    <Link href={linkdin}>{`@${social}`}</Link>
                    <FaLinkedin color="blue" />
                  </p>
                ) : null} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestimonialModel
        open={open}
        onHide={() => setOpen(false)}
        testimonial={selectedTestimonial}
      />
    </>
  );
};

{
  /* <div>
  {Object.entries(props).map((item, idx) => (
    <div>
      <h2 key={idx}>{item[0]}</h2>
      <span key={idx}>{item[1]}</span>
    </div>
  ))}
</div> */
}
