import React from "react";

const HeaderText = ({ title = "Title", textColor = "text-white" }) => {
  const titleClasses = `text-2xl md:text-3xl lg:text-5xl ${textColor} text-center`;

  return (
    <div>
      <h1 className={titleClasses}>{title}</h1>
    </div>
  );
};

export default HeaderText;
