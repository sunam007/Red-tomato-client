import React from "react";

const HeaderText = ({ title = "Title", textColor = "text-white" }) => {
  return (
    <h1 className={`text-2xl md:text-4xl lg:text-5xl ${textColor} text-center`}>
      {title}
    </h1>
  );
};

export default HeaderText;
