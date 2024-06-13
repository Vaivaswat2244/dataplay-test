import Modal from "react-bootstrap/Modal";
import React from "react";
import Image from "next/image";

export default function MentorModel({ mentor, open, onHide }) {
  const myLoader = ({ src }) => {
    return `${process.env.NEXT_PUBLIC_APIBASEURL}${src}`;
  };
  const handleClose = () => onHide(false);

  return (
    <Modal className="mentor-modal" centered show={open}>
      <Modal.Body>
        {mentor && (
          <div className="our-menter-card">
            <div className="card-inner d-flex">
              <div className="menter-img">
                <Image
                  loader={myLoader}
                  // unoptimized
                  src={`${mentor.profile}`}
                  alt={mentor.name}
                  width={218}
                  height={240}
                />
              </div>
              <div className="menter-info">
                <div className="menter-info-inner">
                  <h3>{mentor.name}</h3>
                  <h4>{mentor.Designation}</h4>
                  <p className="modal-para">{mentor.bio} </p>
                </div>
                <a
                  className="our-menter-btn"
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </div>
            </div>
            <button className="modal-close-btn" onClick={handleClose}></button>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}
