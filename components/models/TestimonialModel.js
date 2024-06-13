import Modal from "react-bootstrap/Modal";
import React from "react";
import Image from "next/image";

export default function TestimonialModel({ testimonial, open, onHide }) {
  const myLoader = ({ src }) => {
    0.0;
    return `${process.env.NEXT_PUBLIC_APIBASEURL}${src}`;
  };

  const handleClose = () => onHide(false);

  return (
    <Modal className="student-modal" centered show={open}>
      <Modal.Body>
        {testimonial && (
          <div className="our-students-card">
            <button className="modal-close-btn" onClick={handleClose}></button>
            <div className="our-student-img">
              <Image
                loader={myLoader}
                // unoptimized
                src={`${testimonial.profile}`}
                width={168}
                height={168}
                alt="student-img"
              />
            </div>
            <div className="our-student-comment">
              <p>{testimonial.content}</p>
              <a
                href={testimonial.linkdin}
                className="d-flex align-items-center justify-content-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {testimonial.author} <span></span>
              </a>
              <h6>“ Our career track achievers “</h6>
              <div className="d-flex align-items-center justify-content-between">
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
        )}
      </Modal.Body>
    </Modal>
  );
}
