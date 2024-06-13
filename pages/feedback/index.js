import React from "react";
import Header from "../../components/Header";
// import PageBanner from "../components/PageBanner";
import Footer from "../../components/Footer";
import getTestimonial from "../../lib/getTestimonial";
import DPFormGenerator from "../../components/autoForm/FormGenerator";
import OurStudentsSpeak from "../../components/testimonial/OurStudentsSpeak";

const DataAnalyticsCourse = ({ testimonials }) => {
  return (
    <>
      <Header />
      {/* <PageBanner /> */}
      <section className="feedback-section mt-5">
        <div className="container">
          <DPFormGenerator formId="562g25p72AXgmssWOwVDaX5s1zsD0F" />
        </div>
      </section>
      {testimonials && <OurStudentsSpeak testimonials={testimonials} />}
      <Footer />
    </>
  );
};

export default DataAnalyticsCourse;

export async function getServerSideProps() {
  try {
    const testimonials = await getTestimonial();
    return { props: { testimonials } };
  } catch (error) {
    console.log(error);
  }
}
