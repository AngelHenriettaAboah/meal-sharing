const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const mealsRouter = require("./api/meals");
const buildPath = path.join(__dirname, "../../dist");
const port = process.env.PORT || 3000;
const cors = require("cors");
const knex = require("knex");

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
router.get("/future-meals", async (req, res) => {
  try {
    const futureMeals = await knex.raw(
      "SELECT * FROM meals WHERE `when` > NOW()"
    );
    res.json(futureMeals[0]);
  } catch (error) {
    console.error("Error fetching future meals:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to respond with all meals in the past
router.get("/past-meals", async (req, res) => {
  try {
    const pastMeals = await knex.raw(
      "SELECT * FROM meals WHERE `when` < NOW()"
    );
    res.json(pastMeals[0]);
  } catch (error) {
    console.error("Error fetching past meals:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to respond with all meals sorted by ID
router.get("/all-meals", async (req, res) => {
  try {
    const allMeals = await knex.raw("SELECT * FROM meals ORDER BY id");
    res.json(allMeals[0]);
  } catch (error) {
    console.error("Error fetching all meals:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to respond with the first meal (minimum id)
router.get("/first-meal", async (req, res) => {
  try {
    const firstMeal = await knex.raw("SELECT * FROM meals ORDER BY id LIMIT 1");
    if (firstMeal[0].length === 0) {
      res.status(404).json({ error: "No meals found" });
    } else {
      res.json(firstMeal[0][0]);
    }
  } catch (error) {
    console.error("Error fetching first meal:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to respond with the last meal (maximum id)
router.get("/last-meal", async (req, res) => {
  try {
    const lastMeal = await knex.raw(
      "SELECT * FROM meals ORDER BY id DESC LIMIT 1"
    );
    if (lastMeal[0].length === 0) {
      res.status(404).json({ error: "No meals found" });
    } else {
      res.json(lastMeal[0][0]);
    }
  } catch (error) {
    console.error("Error fetching last meal:", error);
    res.status(500).json({ error: "Internal server error" });
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
