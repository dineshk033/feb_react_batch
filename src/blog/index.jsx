import React, { useState } from "react";
import AddBlog from "./addBlog";
import { RenderBlog } from "./list-blog";
import { AxiosInstance } from "./axios";

export default function Blog() {
  const [list, setList] = useState([]);
  const fetchList=async()=>{
    const res = await AxiosInstance.get("/posts")
    res.
}
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h2 className="my-3">Blog add</h2>
          <AddBlog />
        </div>
        <div className="col-6">
          <RenderBlog />
        </div>
      </div>
    </div>
  );
}
