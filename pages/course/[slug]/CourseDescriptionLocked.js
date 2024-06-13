import React, { useRef, useState, useEffect } from "react";
import { Accordion, Modal } from "react-bootstrap";
import Image from "next/image";
import { IoLockClosed } from "react-icons/io5";

const CourseDescriptionLocked = ({ course, maincourse, idx }) => {
  const contentRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [buyCourse, setBuyCourse] = useState(false);
  const [courseCtn, setCourseCtn] = useState(false);

  const myLoader = ({ src }) => {
    return `${src}`;
  };

  useEffect(() => {
    const contentElement = contentRef.current;
    if (contentElement) {
      if (contentElement.scrollHeight > contentElement.clientHeight) {
        setShowButton(true);
      }
    }
  }, []);

  function handleLockedContent() {
    setBuyCourse(true);
  }

  function closeBuyCousrseHandler() {
    setBuyCourse(false);
  }

  function courseCtnHandle(e) {
    e.stopPropagation();
    setCourseCtn(!courseCtn);
  }

  return (
    <>
      {course && (
        <>
          <div className="course-box lock-data" onClick={handleLockedContent}>
            <Accordion.Item aria-disabled eventKey={`${idx}`}>
              <Accordion.Header>
                <div className="d-flex justify-content-start align-items-center gap-2">
                  <IoLockClosed />
                  <h3>{course?.title}</h3>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <h4
                  ref={contentRef}
                  className={`course_description${courseCtn ? " d-block" : ""}`}
                >
                  {course.description}
                </h4>
                {showButton && (
                  <a
                    className="course-de-btn"
                    href="javascript:void(0)"
                    onClick={courseCtnHandle}
                  >
                    {courseCtn ? "Show Less" : "Show More"}
                  </a>
                )}

                {course.url && (
                  <div className="file-wrapper">
                    {course?.url.map((file, index) => (
                      <button
                        key={index}
                        type="button"
                        className="pdf-btn"
                        onClick={handleLockedContent}
                      >
                        {file}
                      </button>
                    ))}
                  </div>
                )}
              </Accordion.Body>
            </Accordion.Item>
          </div>
          <Modal className="buy-course-modal" centered show={buyCourse}>
            <Modal.Body className="buy-course-modal-body">
              <div className="buy-course-modal-inner">
                <div className="video-ar-box">
                  <Image
                    loader={myLoader}
                    // unoptimized
                    src={`${maincourse?.image}`}
                    width={336}
                    height={269}
                    alt="our-coues"
                  />
                </div>
                <h3>Buy course for more exciting contents</h3>

                <button
                  type="button"
                  className="btn-cutom btn-con-cus"
                  style={{ border: "2px solid #FF7468" }}
                >
                  Self Guided Course : &nbsp;{" "}
                  <span>₹ 49{maincourse.content_price_discounted}</span>
                </button>
                <button
                  type="button"
                  className="btn-cutom btn-enroll"
                  style={{ border: "2px solid #FF7468" }}
                >
                  Mentor Guided Course: &nbsp;{" "}
                  <span>₹ 79{maincourse?.course_price_discounted}</span>
                  {/* <sup>
                    <del>{maincourse?.course_price}</del>
                  </sup> */}
                </button>
                <button
                  className="modal-close-btn"
                  onClick={closeBuyCousrseHandler}
                ></button>
              </div>
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
};

export default CourseDescriptionLocked;
