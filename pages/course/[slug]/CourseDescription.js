import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoginModel } from "../../../store/redux/genaralSlice";
import FilePreviewModel from "../../../components/models/PreviewModel";
import LoginModel from "../../../components/models/LoginModel";
import getTestimonial from "../../../lib/getTestimonial";
import { Accordion } from "react-bootstrap";
import { IoLockOpen } from "react-icons/io5";

const extensionToType = {
  pdf: "pdf",
  doc: "office",
  docx: "office",
  pptx: "office",
  jpg: "image",
  jpeg: "image",
  png: "image",
  mp4: "video",
  webm: "video",
  avi: "video",
  wmv: "video",
  mkv: "video",
};

const ContentDescription = ({ course, token, idx }) => {
  const contentRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [filePath, setFilePath] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [open, setOpen] = useState(false);
  const [courseCtn, setCourseCtn] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const dispatch = useDispatch();

  function getFileType(fileName) {
    const access_token = localStorage.getItem("access_token");

    const filetp = getFileTypeFromFileName(fileName);
    setFileType(filetp);
    setFilePath(`https://api.dataplay.co.in${fileName}`);
    if (filetp && access_token) {
      setOpen(true);
    } else {
      localStorage.setItem(
        "url_content",
        JSON.stringify({
          path: `https://api.dataplay.co.in${fileName}`,
          type: filetp,
        })
      );
      dispatch(setLoginModel(true));
    }
  }

  useEffect(() => {
    const cr_content = JSON.parse(localStorage.getItem("url_content"));
    const access_token = localStorage.getItem("access_token");
    if (token?.length === "0") {
      setLoginOpen(true);
    }
    if (cr_content && access_token) {
      setFileType(cr_content.type);
      setFilePath(cr_content.path);
      localStorage.removeItem("url_content");
      setOpen(true);
    }

    const contentElement = contentRef.current;
    if (contentElement) {
      if (contentElement.scrollHeight > contentElement.clientHeight) {
        setShowButton(true);
      }
    }
  }, []);

  function onHide() {
    setOpen(false);
  }

  function getFileTypeFromFileName(fileName) {
    const lastDotIndex = fileName.lastIndexOf(".");
    if (lastDotIndex !== -1) {
      const fileType = fileName.substring(lastDotIndex + 1);
      return extensionToType[fileType];
    } else {
      return "No file type found";
    }
  }
  function courseCtnHandle() {
    setCourseCtn(!courseCtn);
  }

  return (
    <>
      <LoginModel
        testimonials={[]}
        open={loginOpen}
        onHide={() => {
          setLoginOpen(false);
        }}
      ></LoginModel>
      <FilePreviewModel
        open={open}
        onHide={onHide}
        file={filePath}
        type={fileType}
      />

      <div className="course-box">
        <Accordion.Item eventKey={`${idx}`}>
          <Accordion.Header>
            <div className="d-flex justify-content-start align-items-center gap-2">
              <IoLockOpen />
              <h3>{course?.title}</h3>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <h4
              ref={contentRef}
              className={`course_description${courseCtn ? " d-block" : ""}`}
            >
              {course?.description}
            </h4>
            {showButton && (
              <a
                className="course-de-btn"
                href="javascript:void(0)"
                onClick={courseCtnHandle}
              >
                {courseCtn ? "Show Less" : "Show More"}
              </a>
            )}

            {course?.url && (
              <div className="file-wrapper">
                {course?.url.map((file, index) => {
                  return (
                    <button
                      key={index}
                      type="button"
                      className="pdf-btn"
                      onClick={() => {
                        if (token?.length === 0) {
                          setLoginOpen(true);
                        }

                        getFileType(file.url);
                      }}
                    >
                      {file.url.split("/").reverse()[0]}
                    </button>
                  );
                })}
              </div>
            )}
          </Accordion.Body>
        </Accordion.Item>
      </div>
    </>
  );
};

export default ContentDescription;
