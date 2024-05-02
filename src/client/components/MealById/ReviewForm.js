import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Confetti from "react-dom-confetti";

export function ReviewForm(props) {
  const [meal, setMeal] = useState({});
  const [review, setReview] = useState("");
  const [stars, setStars] = useState("0");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const params = useParams();

  useEffect(() => {
    fetchMealWithId();
  }, []);

  function fetchMealWithId() {
    fetch(`/api/meals/${params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMeal(data[0]);
      })
      .catch((error) => {
        setError("Something went wrong");
        console.log(error);
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

  function addReview(event) {
    event.preventDefault();
    fetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify({
        title: "Review for " + meal.title,
        description: review,
        meal_id: parseInt(params.id),
        stars: stars,
        created_date: getTodaysDate(),
        name: name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
        }, 5000);
        alert("Your review sent successfully");
        props.fetchReviewsFunction();
        setReview("");
        setStars("0");
        setName("");
      }
    });
  }

  return (
    <div className="review-container">
      <p className="error-text"> {error}</p>
      <form action="POST">
        <div
          className="select-container"
          style={{ backgroundColor: "#0c346d" }}
        >
          <p
            className="review-title"
            style={{ color: "white", textAlign: "center" }}
          >
            Have you tried this dish yet? Please share your thoughts with a
            review.
          </p>
          <label
            htmlFor="POST-name"
            className="name-label"
            style={{ color: "white" }}
          >
            Name:
          </label>
          <input
            className="review-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="POST-name"
          />
          <textarea
            className="review-text"
            name="review"
            id="review"
            cols="30"
            rows="10"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
          <label
            htmlFor="POST-stars"
            className="name-label"
            style={{ color: "white" }}
          >
            Rate meal:
          </label>
          <div style={{ fontSize: "24px", color: "#ffd700" }}>
            {[...Array(5)].map((_, index) => (
              <span key={index} onClick={() => setStars(index + 1)}>
                {index < stars ? "★" : "☆"}
              </span>
            ))}
          </div>

          <button className="save-review-button" onClick={addReview}>
            Submit
          </button>
          <Confetti
            active={showConfetti}
            numberOfPieces={1000}
            config={{
              angle: 90,
              spread: 360,
              startVelocity: 40,
              elementCount: 50,
              decay: 0.9,
              left: "50%",
              top: "50%",
            }}
          />
        </div>
      </form>
    </div>
  );
}
