import React from "react";
import HeaderNav from "./header";
import HomeBlog from "./home";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { RenderBlog } from "./list-blog";
import AddBlog from "./addBlog";
import NotFound from "./notfound";
import Login from "./login";

export default function Blog() {
  return (
    <>
      <HeaderNav>
        <div className="text-primary">Blogger App</div>
      </HeaderNav>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeBlog />} />
          <Route path="/list" element={<AddBlog />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          {/* <Route path="*" Component={NotFound} /> */}
        </Routes>
        <Outlet />
      </div>
    </>
  );
}
