import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import MentorModel from "../../components/models/MentorModel";
import { IoLogoLinkedin } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

const MentorsDescription = ({ mentor }) => {
  const contentRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(false);
  const [open, setOpen] = useState(false);

  const myLoader = ({ src }) => {
    return `${process.env.NEXT_PUBLIC_APIBASEURL}${src}`;
  };

  const handleMentorSelect = (data) => {
    setSelectedMentor(data);
    setOpen(true);
  };

  // set show more button visibility
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
      {mentor && (
        <div
          className="our-menter-card mt-xl-0 mt-md-5 position-relative px-sm-3 ps-2"
          data-aos="fade-up"
        >
          <div className="card-inner d-flex h-100">
            <div className="menter-img">
              <Image
                loader={myLoader}
                src={`${mentor.profile}`}
                // unoptimized
                // src="/mentor1.png"
                alt={mentor.name}
                style={{ marginTop: "-30px" }}
                width={280}
                height={380}
              />
              {/* <Image
                src="/mentor1.png"
                width={280}
                height={380}
              /> */}
            </div>
            <div className="menter-info py-md-5 pt-sm-4 pt-3 text-white px-xxl-4 mx-xxl-4 mx-xl-2">
              <div className="menter-info-inner">
                <h4 className="text-white fw-bold text-left">{mentor.name}</h4>
                <h6 className="fw-semibold">{mentor.Designation}</h6>
                <div className="info-para-wrap">
                  <p
                    className="line-clamp-2 mb-0 text-white fw-normal mt-sm-3 mt-2"
                    style={{ fontSize: 15 }}
                    ref={contentRef}
                  >
                    <small>
                      {mentor.bio?.length > 110
                        ? mentor.bio?.slice(0, 110) + "..."
                        : mentor?.bio}
                    </small>
                  </p>
                  {/* {showButton && (
                    <button
                      className="menter-info-readmore"
                      onClick={() => handleMentorSelect(mentor)}
                    >
                      Read More
                    </button>
                  )} */}
                </div>
              </div>
              <a
                className="bg-outer rounded-pill w-fit cursor-pointer position-absolute "
                href={mentor.linkedin}
                style={{ bottom: 40, backgroundColor: "#FF4C3D" }}
              >
                <div
                  className="bg-inner rounded-pill py-1 bg-pink"
                  // style={{ backgroundColor: "#FF4C3D" }}
                >
                  <p className="m-0 px-3 text-white fw-medium py-2 h6">
                    View Profile
                    <FaLinkedinIn
                      className="ms-2 p-1 rounded-1"
                      style={{ backgroundColor: "#0A66C2" }}
                      size={20}
                    />
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
      <MentorModel
        open={open}
        onHide={() => setOpen(false)}
        mentor={selectedMentor}
      />
    </>
  );
};

export default MentorsDescription;
