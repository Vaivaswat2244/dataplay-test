import React from "react";

export const CardHeader = ({ children }) => {
  return <div className="card-child-component">{children}</div>;
};

export const CardFooter = ({ children }) => {
  return <div className="card-child-component">{children}</div>;
};
export const CardContent = ({ children }) => {
  return <div className="card-child-component">{children}</div>;
};
export const Card = ({ children, variant = "default" }) => {
  return <div className={`card-container ${variant}-card`}>{children}</div>;
};
