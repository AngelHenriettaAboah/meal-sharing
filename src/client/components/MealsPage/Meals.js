import React from "react";
import { useContext } from "react";
import { MealsContext } from "../MealsContext/MealsContext";
import { MealItem } from "./MealItem";

export function Meals() {
  const value = useContext(MealsContext);

  return (
    <div className="meals-container">
      {value.isLoading ? <p className="loading-text">Loading...</p> : ""}
      {value.error && <p className="error-text">Something went wrong</p>}
      <ul className="meals-list">
        {value.meals.map((item) => {
          console.log(item.image);
          return (
            <MealItem
              key={item.id}
              id={item.id}
              mealTitle={item.title}
              mealDescription={item.description}
              locationRestaurant={item.location}
              mealPrice={item.price}
              image={`${item.image}`} // Construct image source path
            />
          );
        })}
      </ul>
    </div>
  );
}
