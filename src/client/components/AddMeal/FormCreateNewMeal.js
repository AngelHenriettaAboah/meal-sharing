import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { MealsContext } from "../MealsContext/MealsContext";
import "./formCreateNewMeal.css";

export function FormCreateNewMeal() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [whenDate, setWhenDate] = useState("");
  const [price, setPrice] = useState("");
  const [maxReserv, setMaxReserv] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const value = useContext(MealsContext);

  function addMeal(event) {
    event.preventDefault();
    setError("");
    if (
      title.trim().length == 0 ||
      location.trim().length == 0 ||
      whenDate.trim().length == 0 ||
      price.trim().length == 0 ||
      maxReserv.trim().length == 0 ||
      description.trim().length == 0
    ) {
      setError("Don`t leave empty inputs please.");
    } else {
      fetch("/api/meals", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          location: location,
          when_datetime: value.getTodaysDate(),
          created_date: value.getTodaysDate(),
          price: price,
          max_reservations: maxReserv,
          description: description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (response.ok) {
          alert("Post sent succesfully");
          value.fetchMeals();
          setTitle("");
          setLocation("");
          setPrice("");
          setMaxReserv("");
          setWhenDate("");
          setDescription("");
        }
      });
    }
  }

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  return (
    <div className="form-add-meal">
      <p className="error-text"> {error}</p>
      <h4 className="form-text">
        Do you want to add new meal? Fill up the form .
      </h4>
      <form onSubmit={addMeal}>
        <label htmlFor="POST-title">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="name"
          id="POST-title"
        />
        <label htmlFor="POST-location">Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          name="location"
          id="POST-location"
        />
        <label htmlFor="POST-when">When:</label>
        <input
          type="date"
          min={disablePastDate()}
          value={whenDate}
          onChange={(e) => setWhenDate(e.target.value)}
          name="when"
          id="POST-when"
        />
        <label htmlFor="POST-price">Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          name="price"
          id="POST-price"
        />
        <label htmlFor="POST-max_reservations">Max Reservations:</label>
        <input
          type="number"
          value={maxReserv}
          onChange={(e) => setMaxReserv(e.target.value)}
          name="max_reservations"
          id="POST-max_reservations"
        />
        <label htmlFor="POST-description">Description:</label>
        <textarea
          className="meal-description-text"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          id="POST-description"
        />
        <button type="submit">Add Meal</button>
      </form>
    </div>
  );
}
