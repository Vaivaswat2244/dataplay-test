import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import { FaArrowRight } from "react-icons/fa";

export default function Internship({ open, onHide }) {
  const handleClose = () => onHide(false);

  return (
    <Modal className="login-modal" centered show={open}>
      <Modal.Body className="internship-model p-5">
        <button className="modal-close-btn" onClick={handleClose}></button>
        <section className="bg-white overflow-y-scroll mt-4" style={{height:450}}>
          <h1 className="fw-bold">
            Data Science Intern Opening @{" "}
            <span className="lightpurple"> DATAPLAY</span>
          </h1>
          <h4 className="fw-bold mb-4">
            About <span className="lightpurple"> DATAPLAY</span>:
          </h4>
          <p>
            DataPlay is an innovative education and training startup founded by
            visionary IIITian siblings with 12+ years of industry experience
            working as Data Scientists in Tier 1 Companies bringing global
            exposure to the table. We offer a comprehensive learning experience
            for aspiring Data Scientists by providing them with the best
            material and the best guidance in an interactive environment. <br />
            <br /> During our own preparation phase, we faced challenges in
            sourcing comprehensive and high-quality study materials. This
            experience guided us to acquire the expertise needed to meticulously
            craft tailored courses and training sessions to cater to your
            specific needs. We are a one stop solution for all your Data Science
            needs to become a top-tier professional. <br />
            <br />
            At <span className="lightpurple"> DATAPLAY</span>, we are not just
            educators; we are navigators guiding you to your best self, where
            satisfaction and success intertwine seamlessly.
          </p>
          <h4 className="fw-bold my-4">
            During the Internship, you will spend your time in:
          </h4>
          <div className="d-flex align-items-start mb-2">
            <Image src="/bullet.svg" width={20} height={18} className="me-3 mt-2" />
            <h6 className="fw-bold mb-0">Learning and Development (30%):</h6>
          </div>
          <div className="d-flex align-items-start mb-3 ms-5">
            <Image src="/bullet1.svg" width={12} height={12} className="me-2 mt-2" />
            <p className="mb-0">Engage in continuous learning and development around state of the art algorithms.</p>
          </div>
          <div className="d-flex align-items-start mb-2">
            <Image src="/bullet.svg" width={20} height={18} className="me-3 mt-2" />
            <h6 className="fw-bold mb-0">
              ML and DL POCs and Deployment (40%):
            </h6>
          </div>
          <div className="d-flex align-items-start mb-2 ms-5">
            <Image src="/bullet1.svg" width={12} height={12} className="me-2 mt-2" />
            <p className="mb-0">
              Work on real-world Machine Learning Proof of Concepts (POCs)
              followed by end-to-end deployment.
            </p>
          </div>
          <div className="d-flex align-items-start mb-2 ms-5">
            <Image src="/bullet1.svg" width={12} height={12} className="me-2 mt-2" />
            <p className="mb-0">Chatbot</p>
          </div>
          <div className="d-flex align-items-start mb-2 ms-5">
            <Image src="/bullet1.svg" width={12} height={12} className="me-2 mt-2" />
            <p className="mb-0">Hot Lead generation on website</p>
          </div>
          <div className="d-flex align-items-start mb-2 ms-5">
            <Image src="/bullet1.svg" width={12} height={12} className="me-2 mt-2" />
            <p className="mb-0">Customer churn analysis</p>
          </div>
          <p>
            Gain hands-on experience in applying theoretical knowledge to
            practical scenarios.
          </p>
        </section>
        <div className="d-sm-flex justify-content-center align-items-center mt-4">
          <div className="bg-outer rounded-pill bg-purple mt-4 pt w-fit cursor-pointer me-4">
            <div
              className="bg-inner rounded-pill py-1"
              style={{ backgroundColor: "#FF4C3D" }}
            >
              <p className="m-0 px-4 text-white fw-medium py-2 h6">
                <small>Upload Your Resume</small>
                {/* <FaArrowRight className="ms-2 ps-1" size={16}/> */}
              </p>
            </div>
          </div>
          <div className="bg-outer rounded-pill bg-purple mt-4 pt w-fit cursor-pointer" onClick={handleClose}>
            <div
              className="bg-inner rounded-pill py-1 bg-white"
              // style={{ backgroundColor: "#FF4C3D" }}
            >
              <p className="m-0 px-4 purple fw-medium py-2 h6">
                <small>Submit</small>
                <FaArrowRight className="ms-2 ps-1" size={16} />
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
