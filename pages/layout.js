import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { handleIsProfile, setLoginModel } from "../store/redux/genaralSlice";
import { refreshAuthentication, userCheckAPi } from "../lib/client/clientApis";
import { setuser } from "../store/redux/authSlice";
import Link from "next/link";
import Image from "next/image";
import { DISCORD_LINK } from "../utilities/constants";
import SocialBadge from "../components/common/SocialBadge";

const Layout = ({ children }) => {
  const router = useRouter();
  const [isCompleted, setIsCompleted] = useState(false);
  const dispatch = useDispatch();
  const isProfile = useSelector((state) => state.loginStatemodal).isProfile;

  useEffect(() => {
    if (router.pathname !== "/google/login") {
      const accessToken = localStorage.getItem("access_token");
      const refreshToken = localStorage.getItem("refresh_token");
      if (accessToken && refreshToken) {
        refreshAuthentication(accessToken, refreshToken).then((res) => {
          localStorage.setItem("access_token", res.data?.access);
        });
      }
    }

    var OStype = detectOS();
    if (OStype == "MacOS" || OStype == "iOS") {
      document.body.classList.add("ios-device");
    }
  }, []);

  function detectOS() {
    var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
      windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
      iosPlatforms = ["iPhone", "iPad", "iPod"],
      os = null;
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = "MacOS";
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = "iOS";
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = "Windows";
    } else if (/Android/.test(userAgent)) {
      os = "Android";
    } else if (!os && /Linux/.test(platform)) {
      os = "Linux";
    }
    return os;
  }

  // useEffect(() => {
  //   if (router.pathname !== "/google/login") {
  //     const accessToken = localStorage.getItem("access_token");
  //     if (!accessToken) {
  //       if (
  //         router &&
  //         !isCompleted &&
  //         !router.pathname.includes("Auth/GoogleRedirect")
  //       ) {
  //         setIsCompleted(true);
  //         const interval = setTimeout(() => {
  //           dispatch(setLoginModel(true));
  //         }, 5000);

  //         return () => clearTimeout(interval);
  //       }
  //     } else {
  //       if (!isProfile) {
  //         userCheckAPi(accessToken).then((res) => {
  //           if (res) {
  //             if (res.form_field) {
  //               dispatch(handleIsProfile(true));
  //               dispatch(setuser(res));
  //               if (router.pathname === "/userdetails") {
  //                 router.push("/");
  //               }
  //             } else {
  //               if (router.pathname !== "/userdetails") {
  //                 router.push("/userdetails");
  //               }
  //             }
  //           }
  //         });
  //       }
  //     }
  //   }
  // }, [router]);

  return (
    <>
      <SocialBadge />
      {children}
    </>
  );
};

export default Layout;
