import React from "react";
import Rating from "./ratings";
import { Link } from "react-router-dom";

export default function ProductCard({
  title,
  price,
  discountPercentage,
  rating,
  id,
  thumbnail,
}) {
  return (
    <div className="card h-100">
      <div
        className="badge bg-dark text-white position-absolute"
        style={{ top: "0.5rem", right: "0.5rem" }}
      >
        Sale
      </div>
      <img className="card-img-top" height={200} src={thumbnail} alt={title} />
      {/* <!-- Product details--> */}
      <div className="card-body p-4">
        <div className="text-center">
          {/* <!-- Product name--> */}
          <h5 className="fw-bolder">
            <Link
              to={`/products/${id}`}
              className="text-dark text-decoration-none"
            >
              {title}
            </Link>
          </h5>
          {/* <!-- Product reviews--> */}
          <Rating rating={rating} />
          {/* <!-- Product price--> */}
          <span className="text-muted text-decoration-line-through">
            {price.toFixed(2)}
          </span>
          <span className="text-success fs-5 ms-2">
            {(price - (price * discountPercentage) / 100).toFixed(2)}
          </span>
        </div>
      </div>
      {/* <!-- Product actions--> */}
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          <a className="btn btn-outline-dark mt-auto" href="#">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
