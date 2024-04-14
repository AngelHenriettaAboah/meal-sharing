import React from "react";

function MealCard({ title, description, availRes }) {
  return (
    <div
      className="meal-card"
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "50%",
        height: "auto",
        padding: "30px",
        margin: "50px auto 30px",
      }}
    >
      <h3 className="meal-title">{title}</h3>
      <p className="meal-description">{description}</p>
      <p className="meal-description">There are {availRes} meals left</p>
    </div>
  );
}

export default MealCard;