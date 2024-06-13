"use client";
import DealHeader from "../../../pages/home/DealHeader";
import Footer from "../../Footer";
import Header from "../../Header";

export const PageWrapper = ({ title, subtitle, children }) => {
  return (
    <>
      <DealHeader />
      <div className="home-page-header">
        <Header />
      </div>
      <div></div>
      <div className="about-us">
        <div className="custom-container">
          <h1 className="page-header">{title}</h1>
          {subtitle ? <h4>{subtitle}</h4> : null}
        </div>
      </div>
      <div className="">{children}</div>
      <Footer />
    </>
  );
};

export const CoursePageWrapper = ({ title, subtitle, children }) => {
  <>
    <DealHeader />
    <div className="home-page-header">
      <Header />
    </div>
    <div></div>
    <div className="about-us">
      <div className="custom-container">
        <h1 className="page-header">{title}</h1>
        {subtitle ? <h4>{subtitle}</h4> : null}
      </div>
    </div>
    <div className="">{children}</div>
    <Footer />
  </>;
};
