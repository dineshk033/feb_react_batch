import React from "react";

export default function ListBook(props) {
  return (
    <ul className="list-group mt-4">
      {props.list.map((item) => (
        <li key={item} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
}
