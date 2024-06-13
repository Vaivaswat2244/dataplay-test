import { forminstance, formurlinstance, jsoninstance } from ".";
//get google auth
export const googleOAuth = (redirectURL) => {
  return jsoninstance
    .get(`/auth/sauth/o/google-oauth2/?redirect_uri=${redirectURL}`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};



// post login with google
export const googleLogin = (data) => {
  return formurlinstance
    .post(`/auth/sauth/o/?${data}`, {})
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// get google access token
export const googleAccessToken = (token) => {
  jsoninstance.defaults.headers.common.Authorization = `JWT ${token}`;
  return jsoninstance
    .get(`/auth/users/me`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getFormData = (form) => {
  return jsoninstance
    .get(`/form/${form}/viewform`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return false;
    });
};

// get course content - locked or unlock
export const getCoursContent = (id, token) => {
  if (token) {
    jsoninstance.defaults.headers.common.Authorization = `JWT ${token}`;
  }
  return jsoninstance
    .get(`/courses/${id}/content`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return false;
    });
};

// get user details 
export const userCheckAPi = (token) => {
  jsoninstance.defaults.headers.common.Authorization = `JWT ${token}`;
  return jsoninstance
    .get(`/usercheck`)
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return false;
    });
};

//post mock interview
export const createMockInterview = (data) => {
  const accessToken = localStorage.getItem("access_token");
  forminstance.defaults.headers.common.Authorization = `JWT ${accessToken}`;
  return forminstance
    .post(`/api/mock_interview/`, data)
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return false;
    });
};

// get mock interview slot details
export const getSlots = () => {
  return forminstance
    .get(`/api/mock_interview`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return false;
    });
};

// post user details form 
export const createUserDetails = (data, formId) => {
  const accessToken = localStorage.getItem("access_token");
  forminstance.defaults.headers.common.Authorization = `JWT ${accessToken}`;
  return forminstance
    .post(`form/${formId}/submit`, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return false;
    });
};

// post auth token after login with google
export const refreshAuthentication = (accessToken, refreshToken) => {
  return forminstance
    .post(`auth/jwt/refresh/`, {
      refresh: refreshToken,
      access: accessToken,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return false;
    });
};
