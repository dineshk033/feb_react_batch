import React, { useState } from "react";
import { loginValidateSchema } from "./utils";
const DEFAULTERROR = { email: "", password: "", cpassword: "" };
export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    cpassword: "",
  });
  const [error, setError] = useState(DEFAULTERROR);

  const handleInputChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;
    setLoginData({ ...loginData, [key]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // const errorMSG = validateLoginData(loginData);
    // setError({ ...DEFAULTERROR, ...errorMSG });
    loginValidateSchema
      .validate(loginData, { abortEarly: false })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        const errorMessages = err.inner.reduce((acc, error) => {
          acc[error.path] = error.message;
          return acc;
        }, {});
        console.log(errorMessages);
      });
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-sm p-4">
        <h5 className="card-title text-center mb-4">Sign Up</h5>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label for="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
              value={loginData.email}
              onChange={handleInputChange}
            />
          </div>
          {error.email && (
            <small className="alert alert-danger mb-2">{error.email}</small>
          )}
          <div className="mb-3">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
              value={loginData.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label for="cpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              placeholder="Confirm your password"
              required
              value={loginData.cpassword}
              onChange={handleInputChange}
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
