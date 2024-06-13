import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoginModel } from "../../store/redux/genaralSlice";
import {
  createMockInterview,
  getSlots,
  googleAccessToken,
} from "../../lib/client/clientApis";
import toastr from "toastr";
import moment from "moment/moment";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaArrowRight } from "react-icons/fa";

//mock interview validation
const validateSchema = Yup.object({
  choose_area_of_interest: Yup.string().required(
    "Choose Area of Interest is Required"
  ),
  scheduled_time: Yup.string().required("Scheduled Time is Required"),
  question: Yup.string().required("Question is Required"),
  image: Yup.string().required("Image is Required"),
});
export default function BookNow({ open, onHide }) {
    const [slots, setSlots] = useState([]);
    const [files, setFiles] = useState({});
    const [userEmail, setUserEmail] = useState("");
    const dispatch = useDispatch();
  
    const myLoader = ({ src }) => {
      return `${src}`;
    };
  
    // mock interview form submit
    const formik = useFormik({
      initialValues: {
        choose_area_of_interest: "",
        scheduled_time: "",
        question: "",
        image: "",
      },
      validationSchema: validateSchema,
      onSubmit: async function (values) {
        let formdata = new FormData();
        formdata.append("resume", values.image);
        formdata.append(
          "choose_area_of_interest",
          values.choose_area_of_interest
        );
        formdata.append("email", userEmail);
        formdata.append("question", values.question);
        formdata.append("scheduled_time", values.scheduled_time);
        const result = await createMockInterview(formdata);
        if (result) {
          toastr.success("Mock interview book successfully");
          formik.resetForm();
          setFiles({});
          loadSlots();
        }
      },
    });
  
    // get slot details
    const loadSlots = async () => {
      const result = await getSlots();
      setSlots(result);
    };
  
    // get email id
    const loadUsers = async (access_token) => {
      const result = await googleAccessToken(access_token);
      if (result) {
        setUserEmail(result.email);
      }
    };
  
    useEffect(() => {
      const access_token = localStorage.getItem("access_token");
      loadSlots();
      if (access_token) {
        loadUsers(access_token);
      }
    }, []);
  
    // byte converter function for check file size
    const byteConverter = (bytes, decimals) => {
      const K_UNIT = 1024;
      if (bytes == 0) return "0 Byte";
  
      return (bytes / (K_UNIT * K_UNIT)).toFixed(decimals);
    };
  
    // change input file valition
    const handleFileChange = (event) => {
      const files = event.target.files[0];
      const fileSize = byteConverter(files.size, 2, "MB");
      if (
        files.type != "image/png" &&
        files.type != "image/jpg" &&
        files.type != "application/pdf"
      ) {
        toastr.error("File does not support. You must use PNG, JPG or PDF ");
        return false;
      } else if (fileSize > 10) {
        toastr.error("Please upload a file smaller than 10 MB ");
        return false;
      } else {
        setFiles(files);
        formik.setFieldValue("image", files);
      }
    };
  
    // form submit if have access token
    const handleSubmit = (event) => {
      event.preventDefault();
      const access_token = localStorage.getItem("access_token");
      if (access_token) {
        formik.handleSubmit();
      } else {
        dispatch(setLoginModel(true));
      }
    };
  const handleClose = () => onHide(false);

  return (
    <Modal centered show={open}>
      <Modal.Body>
      <button className="modal-close-btn" onClick={handleClose}></button>
      <section className="book-mock-interview" id="my-mock-interview">
        <div className="container">
          <div className="book-mock-title">
            <h4>Once in a Lifetime Deal</h4>
            <h3>
              Book Mock Interview @<span>Free</span>
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="book-mock-card mt-4">
              <div className="file-upload-box  d-flex align-items-center justify-content-between">
                <div className="file-notes mb-sm-0 mb-2 d-flex align-items-center">
                  <div className="file-icon"></div>
                  <div className="file-info me-2">
                    <h5>Attach your Resume or CV</h5>
                    <h6>JPG, PNG or PDF, file size no more than 10MB</h6>
                  </div>
                </div>
                {/* <form> */}
                <label
                  htmlFor="hiddenBtn"
                  className="choose-btn"
                  id="chooseBtn"
                >
                  Select file
                </label>
                <input
                  type="file"
                  id="hiddenBtn"
                  name="image"
                  onChange={handleFileChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.image && formik.errors.image && (
                <span className="text-danger">{formik.errors.image}</span>
              )}
              {files && files?.name && (
                <p className="file-name">{files?.name}</p>
              )}
              <div className="form-boox-mock">
                <div className="form-group">
                  <label htmlFor="choose_area_of_interest">
                    Choose Area of Interest
                  </label>
                  <select
                    className="form-control"
                    name="choose_area_of_interest"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.choose_area_of_interest}
                  >
                    <option value="">Select option</option>
                    <option value="data_sciennce">1. Data Science</option>
                    <option value="data_analytics">2. Data Analytics</option>
                    <option value="not_decided">3. Not yet decided</option>
                  </select>
                  {formik.touched.choose_area_of_interest &&
                    formik.errors.choose_area_of_interest && (
                      <span className="text-danger">
                        {formik.errors.choose_area_of_interest}
                      </span>
                    )}
                </div>
                <div className="form-group">
                  <label>
                    Any Specific areas you want to be assessed more on ?
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Write down here"
                    name="question"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.question}
                  />
                  {formik.touched.question && formik.errors.question && (
                    <span className="text-danger">
                      {formik.errors.question}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label>
                    Choose date and time that suits you for the mock interview
                  </label>
                  <select
                    className="form-control"
                    name="scheduled_time"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.scheduled_time}
                  >
                    <option key="">Choose a slot</option>
                    {slots &&
                      slots.map((element) => {
                        const slotStart = moment(element.Starttime).format(
                          "H:mm"
                        );
                        const slotEnd = moment(element.endtime).format("H:mm");
                        return (
                          <option key={element.id} value={element.Starttime}>
                            {element.date} ({slotStart} To {slotEnd})
                          </option>
                        );
                      })}
                  </select>
                  {formik.touched.scheduled_time &&
                    formik.errors.scheduled_time && (
                      <span className="text-danger">
                        {formik.errors.scheduled_time}
                      </span>
                    )}
                </div>
                <div className="d-flex flex-column align-items-center">
                  <div className="bg-outer rounded-pill bg-purple mt-5 pt w-fit cursor-pointer">
                    <div
                      className="bg-inner rounded-pill py-1"
                      style={{ backgroundColor: "#FF4C3D" }}
                    >
                      <button style={{background:"transparent",border:"none"}} type="submit" className="m-0 px-4 text-white fw-medium py-2 h6">
                        <small>Book Now</small>
                        <FaArrowRight className="ms-2 ps-1" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                {/* <input
                  type="submit"
                  name="submit"
                  className="btn-cutom"
                  value="Book Now"
                /> */}
              </div>
            </div>
          </form>
        </div>
      </section>
      </Modal.Body>
    </Modal>
  );
}
