import React from "react";

export default function UserCard({
  firstName,
  lastName,
  age,
  email,
  phone,
  gender,
  bloodGroup,
  hair,
}) {
  return (
    <div className="card p-2">
      <h5 className="card-title">{`${firstName} ${lastName}`}</h5>
      <p className="card-text">
        <strong>Age:</strong> {age}
        <br />
        <strong>Email:</strong> {email}
        <br />
        <strong>Phone:</strong> {phone}
        <br />
        <strong>Gender:</strong>
        {gender}
        <br />
        <strong>Blood Group:</strong>
        {bloodGroup}
        <br />
        <strong>Hair:</strong> {hair.color} {hair.type}
      </p>
    </div>
  );
}
