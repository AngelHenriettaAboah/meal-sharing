import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FormReservation } from "./FormReservation";
import { ReviewsComponent } from "./ReviewsComponent";
import "./mealWithId.css";
import MealCard from "./MealCard";

export function MealWithId() {
  const [meal, setMeal] = useState({});
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    fetchMealWithId();
    fetchAvailReservation();
  }, []);

  function fetchMealWithId() {
    fetch(`/api/meals/${params.id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setMeal(data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(true);
        setIsLoading(false);
        console.log(error);
      });
  }

  function fetchAvailReservation() {
    fetch(`/api/meals?availableReservations=true`)
      .then((response) => response.json())
      .then((data) => {
        setReservations(data);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  }

  const availRes = reservations
    .filter((item) => item.id == params.id)
    .map((e) => e.available_reservation);

  return (
    <div className="id-meal-container">
      {isLoading && <p className="loading-text">Loading...</p>}
      {error && <p className="error-text">Something went wrong</p>}
      <MealCard
        title={meal.title}
        description={meal.description}
        availRes={availRes}
      />
      {parseInt(availRes) > 0 ? (
        <>
          <p
            className="meal-description"
            style={{ color: "white", display: "none" }}
          >
            There are {availRes} meals left
          </p>
          <FormReservation
            id={meal.id}
            availRes={availRes}
            reloadReservations={fetchAvailReservation}
          />
        </>
      ) : (
        <p className="no-meals-left">
          Sorry...There are no available meals left
        </p>
      )}
      <ReviewsComponent id={params.id} />
    </div>
  );
}
