import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { AxiosInstance } from "./axios";
import ProductCard from "./product-card";

export default function ProductDetail() {
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const productId = params.productId;
  console.log(location);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await AxiosInstance.get(`/products/${productId}`);
        setProduct(res.data);
        const catgRes = await AxiosInstance.get(
          `/products/category/${res.data.category}`
        );
        setRelated(catgRes.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [productId]);
  const handleAddToCart = () => {
    alert(`Added ${quantity} of ${product.title} to cart!`);
  };
  // setProduct(null);
  const handleBuyNow = () => {
    alert(`Purchased ${quantity} of ${product.title}!`);
  };
  if (product === null) {
    return (
      <div className="container mt-5">
        <h1 className="text-center">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid rounded"
          />
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <h1 className="fw-bold">{product.title}</h1>
          <p className="text-muted">{product.description}</p>
          <h4 className="text-success">
            $
            {(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}{" "}
            <span className="text-muted text-decoration-line-through">
              ${product.price.toFixed(2)}
            </span>
          </h4>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>Stock:</strong>{" "}
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>
          <p>
            <strong>Warranty:</strong> {product.warrantyInformation}
          </p>

          {/* Quantity Selector */}
          <div className="d-flex align-items-center mb-3">
            <label htmlFor="quantity" className="me-2">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              className="form-control w-25"
              value={quantity}
              min="1"
              max={product.stock}
              onChange={(e) =>
                setQuantity(
                  Math.min(Math.max(1, e.target.value), product.stock)
                )
              }
            />
          </div>

          {/* Buttons */}
          <div className="d-flex gap-3">
            <button className="btn btn-outline-dark" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="btn btn-success" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-5">
        <h3>Reviews</h3>
        {product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index} className="border-bottom pb-3 mb-3">
              <h5 className="fw-bold">{review.reviewerName}</h5>
              <p className="text-warning">
                {"★".repeat(review.rating)} {"☆".repeat(5 - review.rating)}
              </p>
              <p>{review.comment}</p>
              <small className="text-muted">
                {new Date(review.date).toLocaleDateString()}
              </small>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
      {related && (
        <div className="row">
          <h2 className="text-dark fs-4">Related Products</h2>
          {related.slice(0, 3).map((item) => (
            <div className="col-md-3" key={item.id}>
              <ProductCard {...item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
