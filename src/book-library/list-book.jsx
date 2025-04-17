import React from "react";

export default function ListBook(props) {
  return (
    <>
      <h4 className="fs-4 text-primary mt-4">{props.title}</h4>
      <ul className="list-group ">
        {props.list.map((item) => (
          <li
            key={item}
            className="list-group-item d-flex justify-content-between"
          >
            {item}
            {props.showBtn && (
              <button
                className="btn btn-sm btn-danger"
                onClick={() => props.handleDelete(item)}
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
