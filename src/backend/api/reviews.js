const express = require("express");
const router = express.Router();
const knex = require("knex");

// GET all reviews
router.get("/api/reviews", async (req, res) => {
  try {
    const reviews = await knex("reviews").select("*");
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET all reviews for a specific meal
router.get("/api/meals/:meal_id/reviews", async (req, res) => {
  const mealId = req.params.meal_id;
  try {
    const reviews = await knex("reviews").where({ meal_id: mealId });
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST a new review
router.post("/api/reviews", async (req, res) => {
  const newReview = req.body;
  try {
    await knex("reviews").insert(newReview);
    res.status(201).json({ message: "Review added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET a review by id
router.get("/api/reviews/:id", async (req, res) => {
  const reviewId = req.params.id;
  try {
    const review = await knex("reviews").where({ id: reviewId }).first();
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }
    res.json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// UPDATE a review by id
router.put("/api/reviews/:id", async (req, res) => {
  const reviewId = req.params.id;
  const updatedReview = req.body;
  try {
    await knex("reviews").where({ id: reviewId }).update(updatedReview);
    res.json({ message: "Review updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE a review by id
router.delete("/api/reviews/:id", async (req, res) => {
  const reviewId = req.params.id;
  try {
    await knex("reviews").where({ id: reviewId }).del();
    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
