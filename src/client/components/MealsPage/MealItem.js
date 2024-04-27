import React from "react";
import { Link } from "react-router-dom";
import "./meals.css";

export function MealItem(props) {
  const renderStars = (rating) => {
    const fullStar = "★";
    const emptyStar = "☆";
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(fullStar);
      } else {
        stars.push(emptyStar);
      }
    }
    return stars.join(" "); // Join stars into a single string
  };

  const randomRating = Math.floor(Math.random() * 6);
  return (
    <li className="meal-item">
      <img
        src={props.image}
        alt={props.mealTitle}
        className="meal-item-image"
      />
      {/* Image element */}
      <h4>{props.mealTitle}</h4>
      <p>{props.mealDescription}</p>
      <p>{props.locationRestaurant}</p>
      <p className="meal-price">{props.mealPrice} kr.</p>
      <p className="meal-rating">{renderStars(randomRating)}</p>
      <Link to={`/meals/${props.id}`}>
        <button
          className="meal-button"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          Reserve Meal
        </button>
      </Link>
    </li>
  );
}
