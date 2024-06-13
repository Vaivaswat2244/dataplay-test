import React from "react";
import DealHeader from "../home/DealHeader";
import Header from "../../components/Header";
import Image from "next/image";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <div>
      <DealHeader />
      <div className="home-page-header">
        <Header />
      </div>
      <div className="pt-5 pb-4"></div>
      <div className="about-us justify-content-center px-5 d-flex flex-column mb-5">
        <h1 className="mx-5 ps-4 purple text-lg-start text-center fw-semibold mt-4">
          Contact Us
        </h1>
        <p className="mx-5 ps-4 purple text-lg-start text-center fw-semibold ">
          Home {" >  "}
          <span className="pink">Contact Us</span>
        </p>
      </div>
      <div className="container">
        <div className="d-lg-flex align-items-xl-center ">
          <div className="col-xl-4 col-lg-5 col-12 pe-lg-5">
            <div
              className="bg-lightpurple bg-outer rounded-4"
              style={{ minHeight: 108 }}
            >
              <div
                className="bg-inner p-3 rounded-4 bg-whitepurple"
                style={{ minHeight: 108 }}
              >
                <div className="d-flex align-items-center">
                  <Image
                    src="/address.svg"
                    width={57}
                    height={57}
                    alt="services-icon"
                  />
                  <div className="ms-3">
                    <h5 className="purple mb-1 fw-bold">Address</h5>
                    <p className="mb-0">
                      <small>
                        E2/202 Chitrakoot, Near Mall of Jaipur, Jaipur, Rajasthan, 302021
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-pink bg-outer rounded-4 my-5"
              style={{ minHeight: 108 }}
            >
              <div
                className="bg-inner p-3 rounded-4 bg-whitepink d-flex align-items-center "
                style={{ minHeight: 108 }}
              >
                <div className="d-flex align-items-center">
                  <Image
                    src="/email.svg"
                    width={57}
                    height={57}
                    alt="services-icon"
                  />
                  <div className="ms-3">
                    <h5 className="purple mb-1 fw-bold">Email Address</h5>
                    <p className="mb-0">
                      <small>Queries@dataplay.co.in</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-lightpurple bg-outer rounded-4"
              style={{ minHeight: 108 }}
            >
              <div
                className="bg-inner p-3 rounded-4 bg-whitepurple"
                style={{ minHeight: 108 }}
              >
                <div className="d-flex align-items-center">
                  <Image
                    src="/call.svg"
                    width={57}
                    height={57}
                    alt="services-icon"
                  />
                  <div className="ms-3">
                    <h5 className="purple mb-1 fw-bold">Contact Number</h5>
                    <p className="mb-0">
                      <small>
                        +91 9468 6516 31 
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7 col-12 contact-us p-4">
            <h2 className="fw-bold purple mt-lg-0 mt-5">Send Us Message</h2>
            <p className="purple">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <textarea
              rows={4}
              placeholder="Your subject here"
              className="w-100 mb-4"
            />
            <div className="d-xl-flex w-100">
              <input placeholder="Name here" className="me-4" />
              <input placeholder="Email here" className="my-xl-0 my-4 me-4" />
              <input placeholder="Website here" />
            </div>
            <div className="bg-outer rounded-pill bg-pink mt-5 mb-3 w-fit cursor-pointer">
              <div className="bg-inner rounded-pill py-1 bg-whitepink">
                <button
                  style={{ background: "transparent", border: "none" }}
                  type="submit"
                  className="m-0 px-4 purple fw-bold py-1 h6"
                >
                  <small>Submit</small>
                </button>
              </div>
            </div>
            {/* <div className="bg-outer rounded-pill bg-pink mt-4 pt w-fit cursor-pointer">
              <div className="bg-inner rounded-pill py-2 bg-whitepink"> */}
            <a
              style={{ background: "transparent", border: "none" }}
              // type="submit"
              href="/feedback"
              className="mt-5 ps-2 pt-4  purple fw-bold py-2 h6"
            >
              <small>Drop a Feedback</small>
            </a>
            {/* </div>
            </div> */}
          </div>
        </div>
        <div className="my-5 py-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14037.98617238245!2d70.3241653!3d28.40427045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1706368179339!5m2!1sen!2s"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
