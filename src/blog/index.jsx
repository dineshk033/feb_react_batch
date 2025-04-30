import React, { useEffect, useState } from "react";
import AddBlog from "./addBlog";
import { RenderBlog } from "./list-blog";
import { AxiosInstance } from "./axios";
import HeaderNav from "./header";

export default function Blog() {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    const res = await AxiosInstance.get("/posts/user/5");
    setList(res.data.posts);
  };
  useEffect(() => {
    fetchList();
  }, []);

  const handleDelete = (id) => {
    AxiosInstance.delete(`/posts/${id}`).then(() => {
      alert("deleted succesfly");
    });
  };
  return (
    <>
      <HeaderNav />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2 className="my-3">Blog add</h2>
            <AddBlog />
          </div>
          <div className="col-6">
            <h2 className="my-3">Blog List</h2>
            <RenderBlog list={list} handleDelete={handleDelete} />
          </div>
        </div>
      </div>
    </>
  );
}
