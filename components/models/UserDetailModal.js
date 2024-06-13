import Modal from "react-bootstrap/Modal";
import React from "react";
import Image from "next/image";
import GoogleLoginModal from "../GoogleLogin";
import { useDispatch } from "react-redux";
import { setLoginModel } from "../../store/redux/genaralSlice";
import DPFormGeneratorUser from "../../components/autoForm/FormGenaratorUser";
import { useEffect } from "react";

export default function UserDetailModal({ open, onHide }) {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("urlData", JSON.stringify(window.location.pathname));
  }, []);

  return (
    <Modal className="login-modal" centered show={open}>
      <Modal.Body className="h-100 p-0">
        <button
          className="modal-close-btn"
          onClick={() => onHide(false)}
        ></button>
        <section className="login-page h-100 p-0">
          <div className="row m-0 p-0 h-100">
            <div className="col-lg-6 col-12 my-auto p-0">
              <div className="login-form">
                <a href="/">
                  <Image src="/logo.svg" alt="Logo" width={168} height={29} />
                </a>
                <h3 className="form-title">
                  Please help us know you a little more
                </h3>
                <DPFormGeneratorUser formId="T3mMPKdPs7yrHfbTNjxJcJs9LtcbqZ" />
              </div>
            </div>
            <div className="col-lg-6 p-0 h-100 d-none d-lg-block position-relative">
              <div className="form-review c-login-info">
                {/* <h3>Just a Step Away From Unlocking Free Content</h3> */}
                <div className="c-login-image-section d-flex justify-content-center align-items-center">
                  <div className="login-content m-5 py-5 px-4 d-flex flex-column align-items-center position-absolute ">
                    <Image
                      src="/login-avatar.png"
                      className="mt-4"
                      width={100}
                      height={100}
                    />
                    <h6
                      className="text-white fw-semibold mt-4 text-center mx-1"
                      style={{ lineHeight: 1.6 }}
                    >
                      Nishant was my mentor at Springboard data science training
                      program. He is very knowledgeable data scientist. Nishant
                      provided constructive and actionable mentorship during my
                      training. He has in depth theoretical understanding and
                      experience in applying state
                    </h6>
                    <div className="our-student-comment name-link d-flex align-items-center justify-content-center flex-column ">
                      <div className="d-flex align-items-center justify-content-center w-100">
                        <a
                          href="#!"
                          // href={testimonial.linkdin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pink h5"
                        >
                          Konstantin Lekomtsev <span></span>
                        </a>
                      </div>
                      <h6 className="pink h6">
                        “ Our career track achievers “
                      </h6>
                    </div>
                  </div>
                  <img src="/login-bg.png" className="img" alt="c-login" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Modal.Body>
    </Modal>
  );
}
