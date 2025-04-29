import React, { useEffect, useState } from "react";
import UserCard from "./user-card";
import axios from "axios";
import Spinner from "./loader";

export default function UserList() {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    // fetch("https://dummyjson.com/users")
    //   .then((res) => res.json())
    //   .then((data) => setList(data.users));
    setIsLoading(true);
    axios.get("https://dummyjson.com/users").then((res) => {
      setList(res.data.users);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users/search", { params: { q: search } })
      .then((res) => {
        setList(res.data.users);
        setIsLoading(false);
      });
  }, [search]);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  console.log(list);
  return (
    <div className="container">
      <div className="row">
        {isLoading && <Spinner />}
        <input
          type="text"
          placeholder="search"
          className="form-control"
          value={search}
          onChange={handleSearch}
        />
        {list.map((item) => (
          <div key={item.id} className="col-4 g-2">
            <UserCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
