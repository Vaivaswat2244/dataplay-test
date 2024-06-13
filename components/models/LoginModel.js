import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Image from "next/image";
import GoogleLoginModal from "../GoogleLogin";
import { useDispatch } from "react-redux";
import { setLoginModel } from "../../store/redux/genaralSlice";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import getTestimonial from "../../lib/getTestimonial";
import OurStudentsSpeak from "../testimonial/OurStudentsSpeak";
import { TestimonialCard } from "../testimonial/testimonial-card";
import { ModalTestimonial } from "./modal-testimonial";

export default function LoginModel({ open, onHide, testimonials }) {
  const dispatch = useDispatch();
  const [testimonialList, setTestimonialLst] = useState([]);

  // const fetchTestimonials = async () => {
  //   const res = await getTestimonial()
  //   const response = Promise.resolve(res)
  //   response.then((val) => {
  //     return val
  //   })
  // }

  useEffect(() => {
    localStorage.setItem("urlData", JSON.stringify(window.location.pathname));
    // const testimonialList = await fetchTestimonials()
    const fetchTestimonials = async () => {
      try {
        const res = await getTestimonial();
        setTestimonialLst(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTestimonials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Modal className="login-modal" centered show={open}>
      <Modal.Body className="login-modal-body">
        { <button
          className="modal-close-btn"
          onClick={() => {
            onHide(),
              setTimeout(() => {
                dispatch(setLoginModel(true));
              }, 60000);
          }}
        ></button> }
        { <section className="google-oauth auth-modal-item">
          <div>
            <div>
              <h1>Log In</h1>
              <p>{`Welcome to DataPlay!`}</p>
            </div>
            <GoogleLoginModal />
          </div>
          <div className="copy-right">
            <Image src={"/logo.svg"} alt="dataplay" height={50} width={120} />
          </div>
        </section> }
        { <section className="login-modal-right auth-modal-item">
        <div>
          <ModalTestimonial settings={settings} />
        </div>
          <div className="copy-right">
            {`© 2024 Dataplay.com. All rights reserved.`}
          </div>
        </section> }
      </Modal.Body>
    </Modal>
  );
}
