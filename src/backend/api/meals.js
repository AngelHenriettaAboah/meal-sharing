// meals.js

const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meals").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

// GET /api/meals - Returns all meals
router.get("/", async (req, res) => {
  try {
    const meals = await knex.select("*").from("meals");
    res.json(meals);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST /api/meals - Adds a new meal to the database
router.post("/", async (req, res) => {
  try {
    const newMeal = req.body;
    await knex("meals").insert(newMeal);
    res.status(201).json({ message: "Meal created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET /api/meals/:id - Returns the meal by id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const meal = await knex.select("*").from("meals").where("id", id).first();
    if (meal) {
      res.json(meal);
    } else {
      res.status(404).json({ error: "Meal not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// PUT /api/meals/:id - Updates the meal by id
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedMeal = req.body;
    const result = await knex("meals").where("id", id).update(updatedMeal);
    if (result) {
      res.json({ message: "Meal updated successfully" });
    } else {
      res.status(404).json({ error: "Meal not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE /api/meals/:id - Deletes the meal by id
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await knex("meals").where("id", id).del();
    if (result) {
      res.json({ message: "Meal deleted successfully" });
    } else {
      res.status(404).json({ error: "Meal not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
