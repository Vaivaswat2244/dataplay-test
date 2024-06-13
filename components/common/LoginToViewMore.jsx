import React from "react";
import GoogleLoginModal from "../../components/GoogleLogin";

const LoginToViewMore = () => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center mb-5 pb-4 px-3">
      <h2 className="fw-bold mb-2 mt-5 text-center">
        Login to view more Questions
      </h2>
      <p className="purple text-center">
        The author made these Questions available to DataPlay Members only.
      </p>
      <GoogleLoginModal />
      <p className="purple mt-3 text-center">
        © 2024 Dataplay.com. All rights reserved.
      </p>
    </div>
  );
};

export default LoginToViewMore;
