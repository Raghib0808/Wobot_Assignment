import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <svg viewBox="0 0 400 160">
        <text
          x="50%"
          y="50%"
          dy=".32em"
          textAnchor="middle"
          className="text-body"
        >
          Wobot ai
        </text>
        <text
          x="50%"
          y="50%"
          dy="2.1em"
          textAnchor="middle"
          className="text-dot"
        >
          .
        </text>
      </svg>
    </div>
  );
};

export default Loader;
