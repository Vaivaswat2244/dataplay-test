import Image from "next/image";
import React from "react";

const OurTestimonials = () => {
  return (
    <div className="container my-5 pt-sm-5">
      <div className="d-flex flex-column align-items-center">
        <div className="bg-lightpurple px-3 py-1 fw-semibold text-white rounded-pill w-fit">
          TESTIMONIALS
        </div>
        <h2 className="fw-bolder h1 mt-2 text-center">Our Testimonials</h2>
        <p className="fw-medium text-center ">
          Transformative Testimonials from our Champions.
        </p>
      </div>
      <div className="d-flex flex-wrap ">
        <div className="col-lg-4 my-4 px-3" data-aos="fade-up">
          <div className="bg-outer bg-purple rounded-5 position-relative ">
            <Image
              src="test-vector1.svg"
              width={46}
              height={46}
              className="position-absolute"
              style={{ bottom: 15, right: 35 }}
            />
            <div className="bg-inner bg-white rounded-5 ps-3 pe-1 py-3">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's ...
              </p>
              <div className="d-flex align-items-end ">
                <Image src="/test1.png" width={54} height={54} />
                <div className="ms-2">
                  <h6 className="fw-bold mb-1">Isbael Hanson</h6>
                  <p className="mb-0" style={{ fontSize: 10 }}>
                    SEO Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 my-4 px-3" data-aos="fade-up">
          <div className="bg-outer bg-lightpurple rounded-5 position-relative ">
            <Image
              src="test-vector1.svg"
              width={46}
              height={46}
              className="position-absolute"
              style={{ bottom: 15, right: 35 }}
            />
            <div className="bg-inner bg-white rounded-5 ps-3 pe-1 py-3">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's ...
              </p>
              <div className="d-flex align-items-end ">
                <Image src="/test1.png" width={54} height={54} />
                <div className="ms-2">
                  <h6 className="fw-bold mb-1">Isbael Hanson</h6>
                  <p className="mb-0" style={{ fontSize: 10 }}>
                    SEO Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 my-4 px-3" data-aos="fade-up">
          <div className="bg-outer bg-pink rounded-5 position-relative ">
            <Image
              src="test-vector1.svg"
              width={46}
              height={46}
              className="position-absolute"
              style={{ bottom: 15, right: 35 }}
            />
            <div className="bg-inner bg-white rounded-5 ps-3 pe-1 py-3">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's ...
              </p>
              <div className="d-flex align-items-end ">
                <Image src="/test1.png" width={54} height={54} />
                <div className="ms-2">
                  <h6 className="fw-bold mb-1">Isbael Hanson</h6>
                  <p className="mb-0" style={{ fontSize: 10 }}>
                    SEO Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTestimonials;
