import Link from "next/link";
import React from "react";
import { NAV_ITEMS } from "../../../utilities/constants";
import { usePathname } from "next/navigation";

const NavList = ({ isActive, handleClick, user }) => {
  const pathName = usePathname();
  return (
    <ul
      className={`m-0 p-0 d-flex align-items-center${
        isActive ? " slidebar-on d-block" : ""
      }`}
    >
      <div className="overlay"></div>
      <button
        type="button"
        onClick={handleClick}
        className={`menu-bar close${isActive ? " slidebar-on" : ""}`}
      ></button>
      <h5 className="user-name">USER</h5>
      {NAV_ITEMS.map((item, idx) => (
        <li key={idx}>
          <Link
            className={`menu-link`}
            href={item.href}
            style={{ color: pathName === item.href ? "#8073E5" : "#fff" }}
            onClick={handleClick}
          >
            {item.lable}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
