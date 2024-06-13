import React, { useEffect } from "react";
import DPFormGeneratorUser from "../../components/autoForm/FormGenaratorUser";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Continuelogin = () => {
  const router = useRouter();

  useEffect(() => {
    let accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      router.push("/");
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");
    router.push("/");
  };

  return (
    <>
      <section className="login-user-details">
        <div className="row m-0 p-0">
          <div className="col-md-5 p-0">
            <div className="login-form">
              <Link href="/">
                <Image src="/logo.svg" alt="Logo" width={168} height={29} />
              </Link>
              <h3 className="form-title">
                Please help us know you a little more
              </h3>
              <DPFormGeneratorUser formId="T3mMPKdPs7yrHfbTNjxJcJs9LtcbqZ" />
            </div>
          </div>
          <div className="col-md-7 p-0">
            <div className="form-review">
              <div className="form-review-inner">
                <img src="/login-img.png" alt="login-img" />
                <h4>
                  Take a moonshot at your tech career and land a job with one of
                  the top tech companies
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* <button className="btn-cutom user-details logout-btn" onClick={logOut}>
          Go Back
        </button> */}
      </section>
    </>
  );
};

export default Continuelogin;
