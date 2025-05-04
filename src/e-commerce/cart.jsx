import React, { useEffect } from "react";
import { AxiosInstance } from "./axios";
import Header from "./header";

const CartComponent = () => {
  const [carts, setCarts] = React.useState([]);

  const fetchCarts = async () => {
    try {
      const res = await AxiosInstance.get("/carts/user/6");
      setCarts(res.data.carts);
    } catch (error) {
      console.error("Error fetching carts:", error);
    }
  };
  useEffect(() => {
    fetchCarts();
  }, []);
  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2 className="text-center mb-3">Shopping Cart</h2>

        {carts.map((cart) => (
          <div key={cart.id} className="card p-4 mb-3 shadow">
            <h4>Cart</h4>

            <div className="row">
              <div className="col-md-8">
                {cart.products.map((product) => (
                  <div key={product.id} className="col-md-6">
                    <div className="card p-3 mb-3">
                      <div className="row g-0 align-items-center">
                        {/* Image Column */}
                        <div className="col-md-4 text-center">
                          <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="img-fluid rounded"
                          />
                        </div>
                        {/* Info Column */}
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">
                              <strong>Price:</strong> $
                              {product.price.toFixed(2)}
                            </p>
                            <p className="card-text">
                              <strong>Quantity:</strong> {product.quantity}
                            </p>
                            <p className="card-text">
                              <strong>Discount:</strong>{" "}
                              {product.discountPercentage}%
                            </p>
                            <p className="card-text">
                              <strong>Discounted Total:</strong> $
                              {product.discountedTotal.toFixed(2)}
                            </p>
                            <button className="btn btn-danger">Remove</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-4">
                <p>Total Products: {cart.totalProducts}</p>
                <p>Total Quantity: {cart.totalQuantity}</p>
                <p>
                  <strong>Total Price:</strong> ${cart.total.toFixed(2)}
                </p>
                <p>
                  <strong>Discounted Price:</strong> $
                  {cart.discountedTotal.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartComponent;
