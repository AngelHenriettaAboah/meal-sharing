import React from "react";
import { HomePageMealItem } from "./HomePageMealItem";
import { useContext } from "react";
import { MealsContext } from "../MealsContext/MealsContext";

export function HomePageComponent() {
  const value = useContext(MealsContext);
  return (
    <>
      {value.isLoading ? <p className="loading-text">Loading...</p> : ""}
      {value.error && <p className="error-text">Something went wrong</p>}
      <ul className="meals-home-page">
        {value.meals.map((item) => {
          return (
            <HomePageMealItem
              key={item.id}
              id={item.id}
              mealTitle={item.title}
            />
          );
        })}
      </ul>
    </>
  );
}
