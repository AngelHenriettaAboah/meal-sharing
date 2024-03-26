const knex = require("knex");
const express = require("express");
const database = require("../database");
const app = express();
const mealsRouter = express.Router(); // Create a new Router

// Mount the mealsRouter at the /api/meals path
app.use("/api/meals", mealsRouter);

// Define the route handler for GET /api/meals
mealsRouter.get("/", async (req, res) => {
  try {
    let mealsQuery = knex("meals"); // Start with a simple query

    // Handle maxPrice parameter
    if (req.query.maxPrice) {
      mealsQuery = mealsQuery.where("price", "<=", req.query.maxPrice);
    }

    // Handle availableReservations parameter
    if (req.query.availableReservations !== undefined) {
      if (req.query.availableReservations === "true") {
        mealsQuery = mealsQuery.where("available_spots", ">", 0);
      } else if (req.query.availableReservations === "false") {
        mealsQuery = mealsQuery.where("available_spots", 0);
      }
    }

    // Handle title parameter
    if (req.query.title) {
      mealsQuery = mealsQuery.where("title", "like", `%${req.query.title}%`);
    }

    // Handle dateAfter parameter
    if (req.query.dateAfter) {
      mealsQuery = mealsQuery.where("when", ">", req.query.dateAfter);
    }

    // Handle dateBefore parameter
    if (req.query.dateBefore) {
      mealsQuery = mealsQuery.where("when", "<", req.query.dateBefore);
    }

    // Handle limit parameter
    if (req.query.limit) {
      mealsQuery = mealsQuery.limit(req.query.limit);
    }

    // Handle sortKey and sortDir parameters
    if (req.query.sortKey && req.query.sortDir) {
      mealsQuery = mealsQuery.orderBy(req.query.sortKey, req.query.sortDir);
    }

    // Execute the query and send the response
    const meals = await mealsQuery;
    res.json(meals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = mealsRouter; // Export the mealsRouter
