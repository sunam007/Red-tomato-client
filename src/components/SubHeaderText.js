import React from "react";

function SubHeaderText({ title = "Title", textColor = "text-black" }) {
  return <h1 className={`text-base font-semibold ${textColor}`}>{title}</h1>;
}

export default SubHeaderText;
