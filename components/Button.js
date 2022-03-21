import React from "react";

export const Button = ({ primary, label, onClick, children }) => {
  return (
    <button className={primary ? "primary" : ""} onClick={onClick}>
      {label} {children}
    </button>
  );
};
