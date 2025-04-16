import React from "react";

export default function AddBook(props) {
  const handleInput = (event) => {
    console.log(event.target.value);
    props.handleInput(event.target.value);
  };

  return (
    <>
      <h3 className="fs-5">Add Book</h3>
      <div className="row">
        <div className="col-10">
          <input
            className="form-control"
            onChange={handleInput}
            placeholder="book name"
            value={props.book}
          />
        </div>
        <button
          onClick={props.handleAdd}
          className="btn btn-sm btn-primary col-2"
        >
          Add
        </button>
      </div>
    </>
  );
}
