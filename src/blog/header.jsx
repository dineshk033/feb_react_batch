import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function HeaderNav(props) {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.children}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={(isActive) =>
                  isActive ? "active nav-link" : "nav-link"
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/list"
                className={(isActive) =>
                  isActive ? "active nav-link" : "nav-link"
                }
                end
              >
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Add Post
              </a>
            </li>
          </ul>
          <span className="navbar-text me-4">
            <button className="btn btn-sm btn-primary" onClick={handleLogin}>
              Login
            </button>
            {/* <button className="btn btn-sm btn-danger">Logout</button> */}
          </span>
        </div>
      </div>
    </nav>
  );
}
