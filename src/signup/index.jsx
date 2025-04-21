import React, { useState } from "react";

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
    skills: ["vue"],
    degree: "",
  });
  const handleInputChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;
    // setFormData({ ...formData, firstname: event.target.value });
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
  console.log(formData);
  return (
    <form className="container mt-5">
      <div className="row">
        <div className="mb-3 col-6">
          <label htmlFor="firstname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            className="form-control"
            placeholder="Enter your first name"
            value={formData.firstname}
            onChange={handleInputChange}
          />
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
          <label htmlFor="password" className="form-label">
            Current Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your current password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3 col-6">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="form-control"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="dob" className="form-label">
          Date of Birth
        </label>
        <input type="date" id="dob" className="form-control" />
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
          />
        </div>
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
            <input type="checkbox" id="react" value="react" />
            <label htmlFor="react" className="me-2">
              React
            </label>
            <input type="checkbox" id="angular" value="angular" />
            <label htmlFor="angular" className="me-2">
              Angular
            </label>
            <input
              type="checkbox"
              id="vue"
              value="vue"
              checked={formData.skills.includes("vue")}
            />
            <label htmlFor="vue">Vue</label>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="degree" className="form-label">
          Degree
        </label>
        <select id="degree" className="form-select">
          <option value="">Select your degree</option>
          <option value="bachelor">Bachelor's</option>
          <option value="master">Master's</option>
          <option value="phd">PhD</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
