import React from "react";

const BasicCard = ({ children, bg = "#fff" }) => {
  return (
    <div style={{ backgroundColor: bg }} className="basic-card">
      {children}
    </div>
  );
};

export default BasicCard;
