import React from "react";
import { useState, useEffect } from "react";
export const MealsContext = React.createContext();

export const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMeals();
  }, []);

  function fetchMeals() {
    setIsLoading(true);
    fetch("/api/meals")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setMeals(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(true);
        console.error(error);
      });
  }

  function getTodaysDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const fullDate = yyyy + "-" + mm + "-" + dd;
    return fullDate;
  }

  return (
    <MealsContext.Provider
      value={{ meals, fetchMeals, error, isLoading, getTodaysDate }}
    >
      {children}
    </MealsContext.Provider>
  );
};
