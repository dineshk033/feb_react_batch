import React, { useEffect, useRef, useState } from "react";
import { AxiosInstance } from "./axios";
import AddBlog from "./addBlog";
import { RenderBlog } from "./list-blog";
import axios from "axios";
import caption1 from "../assets/caption1.png";
export default function HomeBlog() {
  const [list, setList] = useState([]);
  const fileRef = useRef();
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

  const fileUpload = () => {
    const formData = new FormData();
    formData.append("image", fileRef.current.files[0]);
    axios.post(" http://localhost:3000/upload", formData).then((data) => {
      console.log(data);
      fileRef.current.value = null;
    });
    // console.log(fileRef.current.files[0]);
  };
  return (
    <div className="row">
      <div className="col-6">
        <h2 className="my-3">Blog add</h2>
        <input type="file" className="form-control" ref={fileRef} />
        <button type="button" onClick={fileUpload} className="btn btn-success">
          Upload
        </button>
        <AddBlog />
      </div>
      <div className="col-6">
        <h2 className="my-3">Blog List</h2>
        <img src={caption1} alt="Asdsad" height={200} />
        <img
          src={"http://localhost:3000/uploads/image-1747283852899.png"}
          alt="tests"
          width={300}
        />
        <RenderBlog list={list} handleDelete={handleDelete} />
      </div>
    </div>
  );
}
