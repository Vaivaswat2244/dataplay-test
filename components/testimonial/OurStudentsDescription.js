import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import TestimonialModel from "../models/TestimonialModel";

const OurStudentsDescription = ({ testimonial, index }) => {
  const contentRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(false);

  const myLoader = ({ src }) => {
    return `${process.env.NEXT_PUBLIC_APIBASEURL}${src}`;
  };

  // get testimonial data and open popup
  const handleTestimonialSelect = (data) => {
    setSelectedTestimonial(data);
    setOpen(true);
  };

  // readmore button visiblity
  useEffect(() => {
    const contentElement = contentRef.current;
    if (contentElement) {
      if (contentElement.scrollHeight > contentElement.clientHeight) {
        setShowButton(true);
      }
    }
  }, []);

  return (
    <>
      {testimonial && (
        <div
          className=" position-relative rounded-5 bg-outer"
          style={{
            backgroundColor: `${
              index == 0 ? "#FF4C3D" : index == 1 ? "#1D164F" : "#005F81"
            }`,
          }}
        >
          <div
            className="our-students-card bg-inner bg-white rounded-5 p-3"
            style={{
              border: `1px solid ${
                index == 0 ? "#FF4C3D" : index == 1 ? "#1D164F" : "#005F81"
              }`,
            }}
          >
            <div className="our-student-img">
              <Image
                loader={myLoader}
                // unoptimized
                src={`${testimonial.profile}`}
                width={148}
                height={148}
                alt="student-img"
              />
            </div>
            <div className="our-student-comment">
              <p ref={contentRef}>
                {testimonial.content.slice(0, 200)}
                {testimonial.content.length > 200 && (
                  <span
                    className="our-students-info-readmore"
                    onClick={() => handleTestimonialSelect(testimonial)}
                    style={{
                      color: `${
                        index == 0
                          ? "#FF4C3D"
                          : index == 1
                          ? "#1D164F"
                          : "#005F81"
                      }`,
                    }}
                  >
                    ... Read More
                  </span>
                )}
              </p>
            </div>
            <div className="our-student-comment name-link d-flex align-items-center justify-content-center flex-column ">
              <div className="d-flex align-items-center justify-content-center w-100">
                <a
                  href={testimonial.linkdin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {testimonial.author} <span></span>
                </a>
              </div>
              <h6>“ Our career track achievers “</h6>
            </div>
            <div
              className="our-student-comment position-absolute w-100 pe-4"
              style={{ bottom: 25 }}
            >
              <div className="d-flex align-items-center justify-content-between pe-2">
                <div className="our-students-prev">
                  <h3>{testimonial.prevrole}</h3>
                  <h4>{testimonial.prevorg}</h4>
                </div>
                <div className="angel-right-arrow"></div>
                <div className="our-student-next">
                  <h3>{testimonial.currrole} </h3>
                  <h4>{testimonial.currorg}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <TestimonialModel
        open={open}
        onHide={() => setOpen(false)}
        testimonial={selectedTestimonial}
      />
    </>
  );
};

export default OurStudentsDescription;
