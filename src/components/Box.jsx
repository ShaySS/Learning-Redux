import React from "react";
import "./Box.css";

const Box = ({ color }) => {
  return (
    <>
      <div className="box" style={{ backgroundColor: color }} />
    </>
  );
};

export default Box;
