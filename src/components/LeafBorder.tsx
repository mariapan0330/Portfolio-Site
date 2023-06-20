import React from "react";
import "../styles/LeafBorder.css";

const LeafBorder: React.FC = () => {
  return (
    <>
      <img
        // horizontal leaf border
        src={require("../images/leaf-border.png")}
        alt="horizontal leaf border"
        className="leaf-border"
      />
    </>
  );
};

export default LeafBorder;
