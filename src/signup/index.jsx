import React, { useState } from "react";
import { validationForm } from "./utils";
const errorMSG = {
  firstname: "",
  lastname: "",
  password: "",
  confirmPassword: "",
  dob: "",
  emailid: "",
  address: "",
  mobileno: "",
  pincode: "",
  gender: "",
  skills: "",
  degree: "",
};
const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
    dob: "",
    emailid: "",
    address: "",
    mobileno: "",
    pincode: "",
    gender: "",
    skills: ["vue", "react"],
    degree: "",
  });
  const [error, setError] = useState(errorMSG);
  const handleInputChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;

    if (key === "lastname" && !isNaN(value)) {
      return;
    }

    setFormData({ ...formData, [key]: value });
  };

  const handleRadioChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [key]: value });
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    // console.log(value);
    const temp = [...formData.skills];
    // console.log(temp);
    const findIndex = temp.findIndex((el) => el === value);
    if (findIndex !== -1) {
      temp.splice(findIndex, 1);
    } else {
      temp.push(value);
    }
    // console.log(temp);
    setFormData({ ...formData, skills: temp });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    const errormsg = validationForm(formData);
    setError({ ...errorMSG, ...errormsg });
  };
  console.log(error);

  return (
    <form className="container mt-5" onSubmit={handleSubmit}>
      <div className="row">
        <div className="mb-3 col-6">
          <label htmlFor="firstname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            className={`form-control ${error.firstname ? "border-danger" : ""}`}
            placeholder="Enter your first name"
            value={formData.firstname}
            onChange={handleInputChange}
          />
          {error.firstname && (
            <small className="text-danger">{error.firstname}</small>
          )}
        </div>

        <div className="mb-3 col-6">
          <label htmlFor="lastname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            className="form-control"
            placeholder="Enter your last name"
            value={formData.lastname}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="row">
        <div className="mb-3 col-6">
          <label htmlFor="dob" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="form-control"
            value={formData.dob}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="emailid" className="form-label">
          Email ID
        </label>
        <input
          type="email"
          id="emailid"
          className="form-control"
          placeholder="Enter your email ID"
          value={formData.emailid}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <textarea
          id="address"
          className="form-control"
          rows="2"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="row">
        <div className="mb-3 col-6">
          <label htmlFor="mobileno" className="form-label">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobileno"
            className="form-control"
            placeholder="Enter your mobile number"
            value={formData.mobileno}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3 col-6">
          <label htmlFor="pincode" className="form-label">
            Pin Code
          </label>
          <input
            type="text"
            id="pincode"
            className="form-control"
            placeholder="Enter your pin code"
            value={formData.pincode}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="degree" className="form-label">
          Degree
        </label>
        <select
          id="degree"
          className="form-select"
          value={formData.degree}
          onChange={handleInputChange}
        >
          <option value="">Select your degree</option>
          <option value="bachelor">Bachelor's</option>
          <option value="master">Master's</option>
          <option value="phd">PhD</option>
        </select>
      </div>
      <div className="row">
        {" "}
        <div className="mb-3 col-6">
          <label className="form-label">Gender</label>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleRadioChange}
            />
            <label htmlFor="male" className="me-2">
              Male
            </label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleRadioChange}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="mb-3 col-6">
          <label className="form-label">Skills</label>
          <div>
            <input
              type="checkbox"
              id="react"
              value="react"
              checked={formData.skills.includes("react")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="react" className="me-2">
              React
            </label>
            <input
              type="checkbox"
              id="angular"
              value="angular"
              checked={formData.skills.includes("angular")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="angular" className="me-2">
              Angular
            </label>
            <input
              type="checkbox"
              id="vue"
              value="vue"
              checked={formData.skills.includes("vue")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="vue">Vue</label>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
