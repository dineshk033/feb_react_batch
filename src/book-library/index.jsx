import React, { useState } from "react";
import AddBook from "./add-book";
import ListBook from "./list-book";

export default function BookLibrary() {
  const [book, setBook] = useState("new");
  const [list, setList] = useState(["first book", "secpomd book"]);
  const handleInput = (arg) => {
    setBook(arg);
  };
  const handleAdd = () => {
    setList((prev) => [...prev, book]);
    setBook("");
  };
  return (
    <div className="container">
      <div className="fs-2">Book library</div>
      <div className="row">
        <div className="col-6">
          <AddBook
            book={book}
            handleInput={handleInput}
            handleAdd={handleAdd}
          />
          <ListBook list={list} />
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}
