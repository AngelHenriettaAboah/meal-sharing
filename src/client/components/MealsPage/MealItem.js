import React from "react";
import { Link } from "react-router-dom";
import "./meals.css";

export function MealItem(props) {
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
