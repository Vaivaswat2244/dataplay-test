import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import getTestimonial from "../../lib/getTestimonial";
import OurStudentsSpeak from "../../components/testimonial/OurStudentsSpeak";
import Link from "next/link";

const WorkShopPage = ({ testimonials }) => {
  const loadData = () => {
    {
      window.location.href = "/feedback";
    }
  };
  return (
    <>
      <Header />
      <section className="coming-soon-page">
        <div className="container">
          <h3 style={{ cursor: "pointer" }} onClick={loadData}>
            <span className="light-coming">Coming</span> <span>Soon</span> !
          </h3>
        </div>
      </section>
      <section className="feedback">
        <div className="container">
          <h3 className="feedback-title">
            Give feedback <Link href="/feedback">here</Link>
          </h3>
        </div>
      </section>
      {testimonials && <OurStudentsSpeak testimonials={testimonials} />}
      <Footer />
    </>
  );
};

export default WorkShopPage;

export async function getServerSideProps() {
  try {
    const testimonials = await getTestimonial();
    return { props: { testimonials } };
  } catch (error) {
    console.log(error);
  }
}
