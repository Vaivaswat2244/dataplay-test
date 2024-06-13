import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LoginModel from "./models/LoginModel";
import { useDispatch, useSelector } from "react-redux";
import { setLoginModel } from "../store/redux/genaralSlice";
import { usePathname } from "next/navigation";
import Logo from "./Logo/logo";
import Button from "../components/ui/Button";
import NavList from "./common/Navbar/NavList";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [token, setToken] = useState("");
  const [open, setopen] = useState(false);
  const toggleLoginModal = useSelector((state) => state.loginStatemodal);
  const { user } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  const path = usePathname();
  // console.log("first", path);

  // get access token
  useEffect(() => {
    const result = localStorage.getItem("access_token");
    setToken(result);
  }, [token]);

  // remove access token and redirect to home page
  const logOut = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/";
  };
  // console.log(user);
  return (
    <>
      <header className="main-header">
        <div className="custom-container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="header-logo">
              <button
                type="button"
                onClick={handleClick}
                className={`menu-bar${isActive ? " slidebar-on" : ""}`}
              ></button>
              <Logo />
            </div>
            <div className="d-flex align-items-center">
              <div className="nav-menus d-flex align-items-center">
                <NavList
                  user={user}
                  isActive={isActive}
                  handleClick={handleClick}
                />
              </div>
              <div className="header-btn-box d-flex align-items-center">
                {user && (
                  <>
                    <img
                      src={user.avatar || "default-avatar.png"} // Placeholder or user's avatar
                      alt="User Avatar"
                      className="img-fluid rounded-circle"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                        marginRight: "10px",
                      }} // Adjust dimensions as needed
                    />
                    <h4 className="user-name">{user.first_name}</h4>
                  </>
                )}
                {!token ? (
                  <button
                    className="btn-cutom header-btn"
                    href="#"
                    onClick={() => setopen(true)}
                  >
                    Log in /Sign up
                  </button>
                ) : (
                  <Button>Log Out</Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <LoginModel onHide={() => setopen(false)} open={open} />
    </>
  );
};

export default Header;