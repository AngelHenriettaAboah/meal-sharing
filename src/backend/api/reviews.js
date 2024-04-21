const { query } = require("express");
const express = require("express");
const { sum } = require("../database");
const router = express.Router();
const knex = require("../database");

// Returns all reviews
router.get("/", async (request, response) => {
  try {
    let reviews = knex("Review");
    const result = await reviews.select(
      "Review.id",
      "Review.title",
      "Review.description",
      "Review.meal_id",
      "Review.name",
      "Review.stars",
      "Review.created_date"
    );
    response.json(result);
  } catch (error) {
    throw error;
  }
});

// POST	Adds a new rewiew
router.post("/", async (request, response) => {
  try {
    const newItem = request.body;
    const newReview = await knex("Review").insert(newItem);
    response.json(newReview);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
