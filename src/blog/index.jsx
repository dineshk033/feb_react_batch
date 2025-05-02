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
        <div className="text-primary">Blogger</div>
      </HeaderNav>
      <div className="container">
        <Routes>
          <Route path="/" Component={HomeBlog} />
          <Route path="/list" Component={AddBlog} />
          <Route path="/add-blog" Component={AddBlog} />
          <Route path="/login" Component={Login} />
          {/* <Route path="*" Component={<Navigate to="/" replace />} /> */}
          <Route path="*" Component={NotFound} />
        </Routes>
        <Outlet />
      </div>
    </>
  );
}
