import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Questions from "../../components/Questions";
import OurStudentsSpeak from "../../components/testimonial/OurStudentsSpeak";
import DealHeader from "../home/DealHeader";
import GoogleLoginModal from "../../components/GoogleLogin";
import getTestimonial from "../../lib/getTestimonial";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Image from "next/image";
import LoginToViewMore from "../../components/common/LoginToViewMore";
import {
  INTERVIEW_PREP_CATEGORIES,
  INTERVIEW_PREP_LEVELS,
} from "../../utilities/constants";
import { PageWrapper } from "../../components/common/PageWrapper/PageWrapper";

const index = ({ testimonials }) => {
  const [accesToken, setAccessToken] = useState("");

  useEffect(() => {
    const getAccessToken = async () => {
      const token = await localStorage.getItem("access_token");

      token ? setAccessToken(token) : setAccessToken("");
    };

    getAccessToken();
  }, []);
  return (
    <div>
      <PageWrapper
        title={`Interview Prep`}
        subtitle={`In the face of tight and limited job preparation time, this set of selected high-frequency interview problems can help you improve efficiently and greatly increase the possibility of obtaining an offer.`}
      >
        <div className="d-lg-flex container interview-prep mt-4">
          <div className="col-xl-3 col-lg-5 pe-lg-5">
            <div className="position-relative">
              <input
                className="w-100 rounded-pill mb-5 py-2 px-3 me-2"
                placeholder="Search Here..."
              />
              <Image
                src="/dropdown.svg"
                className="position-absolute"
                style={{ right: 10, top: 18 }}
                width={10}
                height={10}
              />
              <Image
                src="/search.svg"
                className="position-absolute"
                style={{ left: 10, top: 8 }}
                width={30}
                height={30}
              />
            </div>
            <div className="tags">
              {INTERVIEW_PREP_CATEGORIES.map((item, idx) => (
                <p key={idx} className="pills">
                  {item.title}
                </p>
              ))}
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 mt-lg-0 mt-5">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="d-flex justify-content-center py-2 bg-lightpurple rounded-pill mx-sm-5 mb-4"
              >
                {INTERVIEW_PREP_LEVELS.map((item, idx) => (
                  <Nav.Item key={idx}>
                    <Nav.Link eventKey={item.eventKey}>{item.title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Questions />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Questions />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Questions />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
        {!accesToken ? <LoginToViewMore /> : null}
        {testimonials ? <OurStudentsSpeak testimonials={testimonials} /> : null}
      </PageWrapper>
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  try {
    const testimonials = await getTestimonial();
    return { props: { testimonials } };
  } catch (error) {
    console.log(error);
    return;
  }
}
