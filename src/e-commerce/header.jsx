import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AxiosInstance } from "./axios";

export default function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the API
    const fetchCatg = async () => {
      try {
        const res = await AxiosInstance.get("/products/categories");
        setCategories(res.data.slice(0, 10));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchCatg();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <NavLink className="navbar-brand" to="/">
          Start Bootstrap
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                to="/products"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? "active" : ""} dropdown-item`
                    }
                    to="/products"
                    end
                  >
                    All Products
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                {categories.map((category) => (
                  <li key={category.slug}>
                    <NavLink
                      className={({ isActive }) =>
                        `${isActive ? "active" : ""} dropdown-item`
                      }
                      to={`/products/category/${category.slug}`}
                      state={{ category: category.url }}
                    >
                      {category.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <NavLink className="btn btn-outline-dark" to="/cart">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                0
              </span>
            </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
}
