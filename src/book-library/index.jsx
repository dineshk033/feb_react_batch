import React, { useEffect, useState } from "react";
import AddBook from "./add-book";
import ListBook from "./list-book";

export default function BookLibrary() {
  const [book, setBook] = useState("new");
  const [list, setList] = useState(["first book", "secpomd book"]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const temp = localStorage.getItem("list")?.split(",") ?? [];
    console.log(temp);
    setList(temp);
  }, []);
  useEffect(() => {
    localStorage.setItem("list", list.join(","));
  }, [list]);
  const handleInput = (arg) => {
    setBook(arg);
  };

  const handleAdd = () => {
    setList((prev) => [...prev, book]);
    setBook("");
  };
  const handleDelete = (arg) => {
    const temp = list.filter((item) => item !== arg);
    setList(temp);
    setHistory((prev) => [...prev, arg]);
  };
  return (
    <div className="container">
      <div className="fs-2">Book library</div>
      <div className="row">
        <AddBook book={book} handleInput={handleInput} handleAdd={handleAdd} />
        <div className="col-6">
          <ListBook
            title="Book list"
            showBtn={true}
            list={list}
            handleDelete={handleDelete}
          />
        </div>
        <div className="col-6">
          <ListBook
            title="History of Book list deletion"
            list={history}
            handleDelete={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
