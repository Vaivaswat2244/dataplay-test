import React from "react";

export const Badge = ({ children, variant = "default", shape = "default" }) => {
  return <div className={`badge ${variant}-badge ${shape}-shape`}>{children}</div>;
};
