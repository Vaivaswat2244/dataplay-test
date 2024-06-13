import React, { useEffect, useState } from "react";
import { createUserDetails, getFormData } from "../../lib/client/clientApis";
import { useFormik } from "formik";
import * as yup from "yup";
import toastr from "toastr";

export default function DPFormGeneratorUser({ formId }) {
  const [formData, setFormData] = useState(null);
  const [schema, setSchema] = useState(null);
  const formik = useFormik({
    validationSchema: schema,
    onSubmit: (values) => {
      const result = createUserDetails(values, formId);
      if (result) {
        formik.resetForm();
        toastr.success("Feedback Send Successfully");
        localStorage.setItem("username","done")
        window.location.href = "/";
      }
    },
  });

  
  useEffect(() => {
    getFormData(formId).then((res) => {
      const quest = res.ques;
      const questId = res.questions;
      const new_qas = [];

      for (let i = 0; i < quest?.length; i++) {
        new_qas.push({
          ...quest[i],
          id: questId[i],
          answer: null,
        });
      }

      const details = {
        code: res.code,
        qsa: new_qas,
        title: res.title,
      };
      setFormData(details);
    });
  }, []);

  useEffect(() => {
    if (formData) {
      const questions = formData.qsa;
      if (questions && questions.length > 0) {
        const initVal = {};
        const valForm = {};
        for (let i = 0; i < questions.length; i++) {
          const valid = questionHandler(questions[i]);
          initVal[`question-${questions[i].id}`] = "";

          if (valid) {
            valForm[`question-${questions[i].id}`] = valid;
          }
        }
        const validationsForm = yup.object(valForm);
        setSchema(validationsForm);
        formik.setValues(initVal);
      }
    }
  }, [formData]);

  const questionHandler = (question) => {
    if (
      question.question == "Name" ||
      question.question == "Email" || question.question == "Phone number"
    ) {
      return yup.string().required("Required");
    } else if (
      question.question == "Work Experience " ||
      question.question == "Education Qualification "
    ) {
      return yup.array().required("Required");
    }
    return null;
  };

  const handleChange = ({ target }) => {
    const name = target && target.name;
    const value = target && target.value;
  };

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        {formData && formData.qsa && formData.qsa.length > 0 && (
          <div className="feedback-form-wrapper">
            <h4>{formData.title}</h4>
            {formData.qsa.map((question, index) => {
              return (
                <>
                  <div key={index} className="mb-2">
                    <label
                      htmlFor="inputprior-experience"
                      className="form-label"
                      onChange={handleChange}
                    >
                      {question.question}
                    </label>

                    {question.question_type === "short" && (
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control col-md-6"
                          placeholder="TEXT HERE"
                          id={`question-${question.id}`}
                          value={
                            formik?.values
                              ? formik?.values[`question-${question.id}`]
                              : ""
                          }
                          onChange={formik?.handleChange}
                          onBlur={formik?.handleBlur}
                        />
                      </div>
                    )}

                    {question.question_type === "multiple choice" && (
                      <div className="form-check-inline m-0 d-flex flex-column">
                        {question.choices?.map((choises, idx) => {
                          return (
                            <div
                              className="form-check form-check-inline mt-3"
                              key={idx}
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`question-${question.id}`}
                                value={question.choices[idx]?.choice}
                                onChange={formik.handleChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`option-${choises.id}`}
                              >
                                {choises.choice}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {question.question_type === "checkbox" && (
                      <div className="form-check-inline m-0 d-block">
                        {question.choices?.map((choises, idx) => {
                          return (
                            <div
                              className="form-check form-check-inline"
                              key={idx}
                            >
                              <input
                                type="radio"
                                id={`question-${question.id}`}
                                value={question.choices[idx]?.choice}
                                onChange={formik.handleChange}
                                name="ans"
                                className="form-check-input"
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`option-${choises.id}`}
                              >
                                {choises.choice}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {question.question_type === "paragraph" && (
                      <div className="form-check-inline m-0 col-6 d-block">
                        <div className="d-block">
                          <textarea
                            rows="4"
                            typeof="text"
                            className="form-check-input form-control"
                            placeholder="Description"
                            id={`question-${question.id}`}
                            value={
                              formik?.values
                                ? formik?.values[`question-${question.id}`]
                                : ""
                            }
                            onChange={formik?.handleChange}
                          ></textarea>
                        </div>
                      </div>
                    )}

                    {formik.touched[`question-${question.id}`] &&
                      formik.errors[`question-${question.id}`] && (
                        <p>{formik.errors[`question-${question.id}`]}</p>
                      )}
                  </div>
                </>
              );
            })}
          </div>
        )}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </React.Fragment>
  );
}
