const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const mealsRouter = require("./api/meals");
const buildPath = path.join(__dirname, "../../dist");
const port = process.env.PORT || 3000;
const cors = require("cors");
const knex = require("./database");

// For week4 no need to look into this!
// Serve the built client html
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(cors());

router.use("/meals", mealsRouter);

// Route to respond with all meals in the future
const todayDate = new Date();
app.get("/future-meals", async (req, res) => {
  try {
    const futureMeals = await knex
      .select("*")
      .from("meal")
      .where("meal_time", ">", todayDate);
    if (futureMeals !== 0) {
      res.status(200).json(futureMeals);
    }
    res
      .status(404)
      .send("The data you have requested for Future Meals is not found");
  } catch (err) {
    console.error("Server Error", err);
    res.status(500).send("Error: Not able to fetch data for future meals");
  }
});

// Route to respond with all meals in the past
app.get("/past-meals", async (req, res) => {
  try {
    const pastMeals = await knex
      .select("*")
      .from("meal")
      .where("meal_time", "<", todayDate);
    if (pastMeals !== 0) {
      res.status(200).json(pastMeals);
    }
    res
      .status(404)
      .send("The data you have requested for Past Meals is not found");
  } catch (err) {
    console.error("Server Error", err);
    res.status(500).send("Error: Not able to fetch data for past meals");
  }
});

// Route to respond with all meals sorted by ID
app.get("/all-meals", async (req, res) => {
  try {
    const allMeals = await knex.select("*").from("meal").orderBy("id"); // Sorting by ID
    if (allMeals !== 0) {
      res.status(200).json(allMeals);
    }
    res.status(404).send("The data you have requested for meals is not found");
  } catch (err) {
    console.error("Server Error", err);
    res.status(500).send("Error: Not able to fetch data for meals");
  }
});

// Route to respond with the first meal (minimum id)
app.get("/first-meal", async (req, res) => {
  try {
    const firstMeal = await knex
      .select("*")
      .from("meal")
      .orderBy("id")
      .limit(1); // Limiting the result to just one meal
    if (firstMeal !== 0) {
      res.status(200).json(firstMeal);
    }
    res
      .status(404)
      .send(
        "The data you have requested for First Meal with the minimum ID is not found"
      );
  } catch (err) {
    console.error("Server Error", err);
    res.status(500).send("Error: Not able to fetch data for meals");
  }
});

// Route to respond with the last meal (maximum id)
app.get("/last-meal", async (req, res) => {
  try {
    const lastMeal = await knex
      .select("*")
      .from("meal")
      .orderBy("id", "desc")
      .limit(1);
    if (lastMeal !== 0) {
      res.status(200).json(lastMeal);
    }
    res
      .status(404)
      .send(
        "The data you have requested for First Meal with the minimum ID is not found"
      );
  } catch (err) {
    console.error("Server Error", err);
    res.status(500).send("Error: Not able to fetch data for meals");
  }
});

// api path
if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw "API_PATH is not set. Remember to set it in your .env file";
}

// for the frontend. Will first be covered in the react class
app.use("*", (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

module.exports = app;

module.exports = router;
