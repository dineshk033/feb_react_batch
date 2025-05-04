import React from "react";

export default function Rating({ rating = 3.5 }) {
  const fullStars = Math.floor(rating); // Number of full stars
  const halfStar = rating % 1 >= 0.5; // Check if there's a half star
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="d-flex justify-content-center small text-warning mb-2">
      {/* Render full stars */}
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <div key={`full-${index}`} className="bi-star-fill me-1"></div>
        ))}
      {/* Render half star */}
      {halfStar && <div className="bi-star-half me-1"></div>}
      {/* Render empty stars */}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <div key={`empty-${index}`} className="bi-star me-1"></div>
        ))}
    </div>
  );
}
