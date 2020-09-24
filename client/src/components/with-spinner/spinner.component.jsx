import React from "react";
import "./with-spinner.scss";

const Spinner = ({ height }) => (
  <div className="spinner-overlay" style={{ height: height || "" }}>
    <div className="spinner-container"></div>
  </div>
);

export default Spinner;
