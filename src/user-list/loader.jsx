import React from "react";

export default function Spinner() {
  return (
    <div className=" position-absolute center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
