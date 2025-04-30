import React, { useState } from "react";
import { AxiosInstance } from "./axios";

export default function AddBlog() {
  const [form, setForm] = useState({ title: "", comment: "" });
  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [key]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    const data = { title: form.title, userId: 5 };
    AxiosInstance.post("/posts/add", data).then(() => {
      setForm({ title: "", comment: "" });
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <label>Title</label>
        <input
          name="title"
          className="form-control"
          value={form.title}
          placeholder="name"
          onChange={handleChange}
        />
      </div>
      <div className="row mt-3">
        <label>Comment</label>
        <input
          name="comment"
          className="form-control"
          placeholder="comment"
          value={form.comment}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary my-2 text-right" type="submit">
        Add Blog
      </button>
    </form>
  );
}
