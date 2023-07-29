import React from "react";

function SubHeaderText({ children, textColor = "text-black" }) {
  return <h1 className={`text-base font-semibold ${textColor}`}>{children}</h1>;
}

export default SubHeaderText;
