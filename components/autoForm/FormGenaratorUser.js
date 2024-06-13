import React, { useEffect, useState } from "react";
import {
  createUserDetails,
  getFormData,
  googleAccessToken,
} from "../../lib/client/clientApis";
import { useFormik } from "formik";
import * as yup from "yup";
import PhoneInput from "react-phone-input-2";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import OtpInput from "react-otp-input";
import { CgSpinner } from "react-icons/cg";
import toastr from "toastr";
import { auth } from "../../config/firebase.config";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { handleIsProfile } from "../../store/redux/genaralSlice";
import Loader from "../Loader";
import { Spinner } from "reactstrap";
import SpinnerWrapper from "../Loader/SpinnerWrapper";

const phoneRegExp = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;

export default function DPFormGeneratorUser({ formId }) {
  const router = useRouter();
  const [formData, setFormData] = useState(null);
  const [schema, setSchema] = useState(null);
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const dispatch = useDispatch();

  const [verifyOtp, setVerifyOtp] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");

  // user details form submition
  const formik = useFormik({
    validationSchema: schema,
    onSubmit: (values) => {
      if (values["email-address"] && values["email-address"] != userEmail) {
        toastr.error(
          "Invalid email address, please enter proper email address",
        );
      } else {
        var urlencoded = new FormData();

        for (let value in values) {
          if (values[value]) {
            if (typeof values[value] === "object") {
              if (values[value].length) {
                for (let i = 0; i < values[value].length; i++) {
                  urlencoded.append(value, values[value][i]);
                }
              } else {
                if (values[value].length === 0) {
                  continue;
                }
                urlencoded.append(value, values[value]);
              }
            } else {
              urlencoded.append(value, values[value]);
            }
          }
        }

        if (verifyOtp) {
          createUserDetails(urlencoded, formId).then((res) => {
            if (res) {
              toastr.success("Your profile registration completed");
              dispatch(handleIsProfile(true));
              router.push("/");
            } else {
              toastr.error("Something went wrong");
            }
          });
        } else {
          toastr.error("Please verify your phone number");
        }
      }
    },
  });

  // get access token from local storage
  useEffect(() => {
    let accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      loadUsers();
    }
  }, []);

  // captcha verification and set form field
  useEffect(() => {
    CaptchVerify();
    getFormData(formId).then((res) => {
      const quest = res.ques;
      const questId = res.questions;
      const new_qas = [];

      for (let i = 0; i < quest?.length; i++) {
        new_qas.push({
          ...quest[i],
          id: questId[i],
        });
      }

      const details = {
        code: res.code,
        qsa: new_qas,
        title: res.title,
      };

      setFormData(details);
    });
    loadUsers();
  }, []);

  // form check
  useEffect(() => {
    if (formData) {
      const questions = formData.qsa;
      if (questions && questions.length > 0) {
        let initVal = {};
        const valForm = {};
        for (let i = 0; i < questions.length; i++) {
          let valid = questionHandler(questions[i]);
          if (questions[i].question === "Phone number") {
            initVal[`${questions[i].id}`] = "+91";
          } else if (questions[i].question == "Email") {
            questions[i]["id"] = "email-address";
          } else {
            initVal[`${questions[i].id}`] = "";
          }

          if (valid) {
            valForm[`${questions[i].id}`] = valid;
          }
        }
        const validationsForm = yup.object(valForm);
        setSchema(validationsForm);
        formik.setValues(initVal);
      }
    }
  }, [formData]);

  // set user email
  const loadUsers = async () => {
    const access_token = localStorage.getItem("access_token");
    const result = await googleAccessToken(access_token);
    if (result) {
      formik.setFieldValue("email-address", result.email);
      setUserEmail(result.email);
    }
  };

  // phone number and multiple choice question handler
  const questionHandler = (question) => {
    if (question.question === "Phone number") {
      if (question.required) {
        return yup
          .string()
          .required("Required")
          .matches(phoneRegExp, "Phone number is not valid");
      } else {
        return yup.string().matches(phoneRegExp, "Phone number is not valid");
      }
    } else {
      if (question.required) {
        if (question.question_type === "multiple choice") {
          return yup.array().required("Required").min(1, "Required");
        } else {
          return yup.string().required("Required");
        }
      }
    }
    return null;
  };

  // Captcha verification
  const CaptchVerify = () => {
    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible",
            callback: (response) => {
              verifyOtp();
            },
            "expired-callback": () => { },
          },
          auth,
        );
      }
    } catch (e) {
      toastr.error(e);
    }
  };

  // phone number varification
  const verifyPhone = (e) => {
    setLoading(true);
    e.stopPropagation();
    if (!verifyOtp) {
      try {
        const formatPh = "+" + ph;
        if (!phoneRegExp.test(formatPh)) {
          toastr.error(
            "Invalid phone number, please enter valid phone number.",
          );
          return;
        }
        const appVerifier = window.recaptchaVerifier;
        auth.settings.isAppVerificationDisabledForTesting = "TRUE";
        signInWithPhoneNumber(auth, formatPh, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            setLoading(false);
            setShowOTP(true);
            setOtp("");
            toastr.success("OTP sent successfully!");
          })
          .catch((error) => {
            if (error) {
              toastr.error("Somthing went wrong, Please try after sometime");
            }
            setLoading(false);
          });
      } catch (error) {
        toastr.error(error);
      }
    }
  };

  // otp varification
  const onOTPVerify = (e) => {
    e.preventDefault();
    setVerifyLoading(true);
    if (otp) {
      window.confirmationResult
        .confirm(otp)
        .then(async (res) => {
          if (res) {
            setVerifyOtp(true);
          }
          setVerifyLoading(false);
        })
        .catch((err) => {
          toastr.error("Invalid OTP");
          setVerifyLoading(false);
          setLoading(false);
        });
    } else {
      toastr.error("OTP Filled");
    }
  };

  // set phone field
  const phoneChange = (event, id) => {
    setPh(event);
    if (event) {
      formik.setFieldValue(id, "+" + event);
    } else {
      formik.setFieldValue(id, event);
    }
  };

  return (
    <React.Fragment>
      {loading || verifyLoading ? <SpinnerWrapper /> : null}
      <div id="recaptcha-container"></div>
      <form onSubmit={formik.handleSubmit} className="user-detail-form">
        {formData && formData.qsa && formData.qsa.length > 0 && (
          <div className="details-form-inner">
            {formData.qsa.map((question, index) => {
              return (
                <>
                  <div key={index} className="field-wrap">
                    {question.question_type === "short" && (
                      <div>
                        {question.question == "Phone number" ? (
                          <>
                            <div className="form-group mb-3 login-form-mobile-field">
                              <PhoneInput
                                countryCodeEditable={false}
                                country={"in"}
                                value={ph}
                                onChange={(ev) => phoneChange(ev, question.id)}
                                onBlur={formik.handleBlur}
                                placeholder="Phone"
                                specialLabel={false}
                                disabled={verifyOtp}
                              />
                              <button
                                type="button"
                                className="verify-otp"
                                onClick={(e) =>
                                  verifyPhone(e, `${question.id}`)
                                }
                              >
                                {verifyOtp
                                  ? "Verified"
                                  : showOTP
                                    ? "Resend Otp"
                                    : "Send Otp"}
                              </button>
                            </div>
                            {showOTP && !verifyOtp ? (
                              <div className="enter-otp-field">
                                <OtpInput
                                  value={otp}
                                  onChange={setOtp}
                                  numInputs={6}
                                  separator={
                                    <span style={{ width: "8px" }}></span>
                                  }
                                  shouldAutoFocus={true}
                                  renderInput={(props) => <input {...props} />}
                                  inputStyle={{
                                    border: "1px solid #000000",
                                    borderRadius: "4px",
                                    width: "32px",
                                    height: "32px",
                                    fontSize: "14px",
                                    color: "#000",
                                    fontWeight: "500",
                                    caretColor: "blue",
                                    marginRight: "10px",
                                    padding: "4px",
                                  }}
                                  focusStyle={{
                                    border: "1px solid #CFD3DB",
                                    outline: "none",
                                  }}
                                />
                                <button
                                  onClick={(e) => onOTPVerify(e)}
                                  className="verify-otp-box"
                                >
                                  {verifyLoading && (
                                    <CgSpinner
                                      size={20}
                                      className="animate-spin"
                                    />
                                  )}
                                  Verify
                                </button>
                              </div>
                            ) : (
                              ""
                            )}
                          </>
                        ) : (
                          <input
                            type="text"
                            className="form-control"
                            placeholder={question.question}
                            id={`${question.id}`}
                            disabled={question.question === "Email"}
                            value={
                              formik?.values
                                ? formik?.values[`${question.id}`]
                                : ""
                            }
                            onChange={formik?.handleChange}
                            onBlur={formik?.handleBlur}
                          />
                        )}
                      </div>
                    )}

                    {question.question_type === "multiple choice" && (
                      <div>
                        <h4 className="login-question-name">
                          {question.question}
                        </h4>
                        <div className="form-check-inline ms-2 me-0 d-flex flex-wrap">
                          {question.choices?.map((choises, idx) => {
                            return (
                              <div className="me-4" key={idx}>
                                <input
                                  type="checkbox"
                                  id={`${question.id}`}
                                  value={choises.id}
                                  onChange={formik.handleChange}
                                  onBlur={formik?.handleBlur}
                                />
                                <label
                                  className="form-check-label ms-2"
                                  htmlFor={`option-${choises.id}`}
                                >
                                  {choises.choice}
                                </label>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {question.question_type === "checkbox" && (
                      <div className="form-check-inline m-0 d-block">
                        <h4 className="login-question-name">
                          {question.question}
                        </h4>
                        {question.choices?.map((choises, idx) => {
                          return (
                            <>
                              <div
                                className="form-check form-check-inline"
                                key={idx}
                              >
                                <input
                                  type="radio"
                                  id={`${question.id}`}
                                  value={question.choices[idx]?.choice}
                                  onChange={formik.handleChange}
                                  className="form-check-input"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`option-${choises.id}`}
                                >
                                  {choises.choice}
                                </label>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    )}

                    {question.question_type === "paragraph" && (
                      <div className="form-check-inline m-0 d-block">
                        <div className="d-block">
                          <textarea
                            rows="4"
                            typeof="text"
                            className="form-check-input form-control"
                            placeholder={question.question}
                            id={`${question.id}`}
                            value={
                              formik?.values
                                ? formik?.values[`${question.id}`]
                                : ""
                            }
                            onChange={formik?.handleChange}
                          ></textarea>
                        </div>
                      </div>
                    )}

                    {formik.touched[`${question.id}`] &&
                      formik.errors[`${question.id}`] && (
                        <p>{formik.errors[`${question.id}`]}</p>
                      )}
                  </div>
                </>
              );
            })}
          </div>
        )}
        <button className="mt-5" type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}
