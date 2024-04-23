const { query } = require("express");
const express = require("express");
const { sum } = require("../database");
const router = express.Router();
const knex = require("../database");

// GET	Returns all meals
router.get("/", async (request, response) => {
  try {
    let meals = knex("Meal");
    if (request.query["maxPrice"]) {
      meals = meals.where("price", "<", request.query["maxPrice"]);
    }
    if (
      request.query["availableReservations"] === "true" &&
      request.query["availableReservations"] !== "undefined"
    ) {
      meals = meals
        .leftJoin("Reservation", "Meal.id", "=", "Reservation.meal_id")
        .select(
          "Meal.id",
          "Meal.title",
          "Meal.description",
          "Meal.location",
          "Meal.when_datetime",
          "Meal.created_date",
          "Meal.price",
          "Meal.max_reservations",
          "Meal.image",
          knex.raw(
            'COALESCE(SUM("Reservation"."number_of_guests"),0) as total_guests'
          ),
          knex.raw(
            '("Meal"."max_reservations"-COALESCE(SUM("Reservation"."number_of_guests"),0)) AS available_reservation'
          )
        )
        .groupBy("Meal.id");
    }
    if (request.query["title"]) {
      meals = meals.where("title", "like", `%${request.query["title"]}%`);
    }
    if (request.query["createdAfter"]) {
      if (new Date(request.query["createdAfter"]) != "Invalid Date") {
        meals = meals.where("created_date", ">", request.query["createdAfter"]);
      } else {
        response.status(400).json("Invalid date");
      }
    }

    if (request.query["limit"]) {
      meals = meals.limit(request.query["limit"]);
    }

    const result = await meals.select(
      "Meal.id",
      "Meal.title",
      "Meal.description",
      "Meal.location",
      "Meal.when_datetime",
      "Meal.max_reservations",
      "Meal.price",
      "Meal.created_date",
      "Meal.image"
    );

    response.json(result);
  } catch (error) {
    throw error;
  }
});

// POST	Adds a new meal
router.post("/", async (request, response) => {
  try {
    const newItem = request.body;
    const newMeal = await knex("Meal").insert(newItem);
    response.json(newMeal);
  } catch (error) {
    throw error;
  }
});

// GET	Returns meal by id
router.get("/:id", async (request, response) => {
  try {
    const neededId = Number(request.params.id);
    if (isNaN(neededId)) {
      response.status(400).json("Invalid data");
    } else {
      const getById = await knex("Meal").where({ id: neededId }).select("*");
      response.send(getById);
    }
  } catch (error) {
    throw error;
  }
});

// PUT	Updates the meal by id
router.put("/:id", async (request, response) => {
  try {
    const updateMeals = request.body;
    const id = Number(request.params.id);
    const updateById = await knex("Meal")
      .where({ id: id })
      .update({ title: updateMeals.title });
    response.json(updateById);
  } catch (error) {
    throw error;
  }
});

// DELETE	Deletes the meal by id
router.delete("/:id", async (request, response) => {
  try {
    const myId = request.params.id;
    const deleteById = await knex("Meal").where({ id: myId }).del();
    response.json(deleteById);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
