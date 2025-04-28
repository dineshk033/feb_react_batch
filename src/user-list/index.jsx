import React, { useEffect, useState } from "react";
import UserCard from "./user-card";
import axios from "axios";

export default function UserList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    // fetch("https://dummyjson.com/users")
    //   .then((res) => res.json())
    //   .then((data) => setList(data.users));
    axios.get("https://dummyjson.com/users").then((res) => {
      setList(res.data.users);
    });
  }, []);
  console.log(list);
  return (
    <div className="container">
      <div className="row">
        {list.map((item) => (
          <div key={item.id} className="col-4 g-2">
            <UserCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
