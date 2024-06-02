const express = require("express");
const router = express.Router();
const knex = require("../database");

// Returns all reservations
router.get("/", async (request, response) => {
  try {
    let reservations = knex("Reservation");
    const result = await reservations.select(
      "Reservation.id",
      "Reservation.number_of_guests",
      "Reservation.meal_id",
      "Reservation.created_date",
      "Reservation.contact_phonenumber",
      "Reservation.contact_name",
      "Reservation.contact_email"
    );
    response.json(result);
  } catch (error) {
    throw error;
  }
});

// POST	Adds a new reservation
router.post("/", async (request, response) => {
  try {
    const newItem = request.body;
    const newReservation = await knex("Reservation").insert(newItem);
    response.json(newReservation);
    console.log("Added");
  } catch (error) {
    throw error;
  }
});

// GET	Returns reservation by id
router.get("/:id", async (request, response) => {
  try {
    const neededId = request.params.id;
    if (isNaN(neededId)) {
      response.status(400).json("Invalid data");
    } else {
      const getById = await knex("Reservation")
        .where({ id: neededId })
        .select("*");
      response.send(getById);
    }
  } catch (error) {
    throw error;
  }
});

// PUT	Updates the reservation by id
router.put("/:id", async (request, response) => {
  try {
    const updateReservation = request.body;
    const id = request.params.id;
    const updateById = await knex("Reservation")
      .where({ id: id })
      .update({ contact_name: updateReservation });
    response.json(updateById);
  } catch (error) {
    throw error;
  }
});

// DELETE	Deletes the reservation by id
router.delete("/:id", async (request, response) => {
  try {
    const myId = request.params.id;
    const deleteById = await knex("Reservation").where({ id: myId }).del();
    response.json(deleteById);
  } catch (error) {
    throw error;
  }
});
module.exports = router;
