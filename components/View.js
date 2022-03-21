import React from "react";

export const View = ({ age, name }) => {
  return (
    <div className="component">
      I'm {name ? name : "anonymous"}. My age is {age ? age : "unknown"}.
    </div>
  );
};
