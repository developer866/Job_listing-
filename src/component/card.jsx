import React from "react";
import "./card.css";

const Card = ({ data }) => {
//   if (!data) return null; // Prevent rendering empty cards

  return (
    <div className="card">
      <div className="profile">
        <img src={data.image} alt={data.image}  />
        <div>
          <h2 className="name">{data.name}</h2>
          <h4 className="status">{data.status}</h4>
        </div>
      </div>
      <h1 className="review">
        <strong>{data.review}</strong>
      </h1>
      <p className="details">{data.details}</p>
    </div>
  );
};

export default Card;
