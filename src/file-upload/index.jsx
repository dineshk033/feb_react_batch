import React, { useEffect, useRef } from "react";

export default function FileUpload() {
  const fileRef = useRef();
  useEffect(() => {
    fileRef.current.focus();
  }, []);
  const uploadFile = (e) => {
    e.preventDefault();
    console.log(fileRef);
  };
  return (
    <div className="container">
      <form className="row" onSubmit={uploadFile}>
        <h4>File Upload</h4>
        <input
          ref={fileRef}
          type="text"
          placeholder="username"
          className="form-control"
        />
        {/* <input ref={fileRef} type="file" name="fileUpload" /> */}
        <button className="btn btn-primary">upload</button>
      </form>
    </div>
  );
}
