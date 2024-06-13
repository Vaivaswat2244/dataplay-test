import React from "react";

export default function BestCources() {
  return (
    <section className="best-course">
      <div className="container">
        <h3>
          Let AI Guide You to the Best Course and Secure Attractive
          Scholarships!
        </h3>
        <div className="best-course-step">
          <h4>What stage are you in your data science journey?</h4>
          <ul className="best-ans p-0 m-0">
            <li>
              <input type="radio" className="radio-best" />I am from a
              non-technical background wanting to explore data science and
              analytics
            </li>
            <li>
              <input type="radio" className="radio-best" />I am from a technical
              background with hands on in coding and Maths, but a complete
              newbie to data science and analytics
            </li>
            <li>
              <input type="radio" className="radio-best" />I am a data analyst
              and trying to make the transition to a data science role
            </li>
            <li>
              <input type="radio" className="radio-best" />I am a data scientist
              looking for career advancement
            </li>
            <li>
              <input type="radio" className="radio-best" />
              Others (Please specify)
            </li>
          </ul>
          <button type="button" className="btn-cutom best-btn">
            Next
          </button>
          <div className="best-footer d-flex align-items-center justify-content-between">
            <ul className="d-flex align-items-center p-0 m-0 best-dots">
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a className="active" href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
            <p className="best-footer-center">
              Just Few Questions away to know your self
            </p>
            <h6 className="step-count-best">
              <span>4</span>/8 Quetions
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
