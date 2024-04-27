import React from "react";
import { useState, useEffect } from "react";
import { ReviewForm } from "./ReviewForm";

export function ReviewsComponent(props) {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  async function fetchReviews() {
    fetch(`/api/reviews`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setReviews(data.filter((item) => item.meal_id === Number(props.id)));
        setIsLoading(false);
      })
      .catch((error) => {
        setError(true);
        setIsLoading(false);
        console.log(error);
      });
  }

  function convertDate(date) {
    return date.split("T")[0];
  }

  return (
    <>
      <ReviewForm
        fetchReviewsFunction={fetchReviews}
        stars={reviews.length > 0 ? reviews[0].stars : 0}
      ></ReviewForm>
      {isLoading ? <p className="loading-text"> Loading... </p> : ""}
      {error && <p className="error-text"> Something went wrong </p>}
      {reviews.length > 0 ? (
        <p className="reviews-title" style={{ backgroundColor: "#ea4625" }}>
          Reviews
        </p>
      ) : (
        ""
      )}
      <ul className="reviews-list">
        {reviews.map((item) => (
          <li className="review-card" key={item.id}>
            <p className="review-data">{item.title}</p>
            <h3 className="review-data">{item.name}</h3>
            <p className="review-data">{item.description}</p>
            <p className="review-data">{convertDate(item.created_date)}</p>
            <p className="review-data">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={index < item.stars ? "filled" : ""}
                >
                  ★
                </span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
