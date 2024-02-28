// reservations.js

const express = require("express");
const router = express.Router();
const knex = require("knex");

// GET /api/reservations - Returns all reservations
router.get("/", async (req, res) => {
  try {
    const reservations = await knex.select("*").from("reservations");
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST /api/reservations - Adds a new reservation to the database
router.post("/", async (req, res) => {
  try {
    const newReservation = req.body;
    await knex("reservations").insert(newReservation);
    res.status(201).json({ message: "Reservation created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET /api/reservations/:id - Returns the reservation by id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const reservation = await knex
      .select("*")
      .from("reservations")
      .where("id", id)
      .first();
    if (reservation) {
      res.json(reservation);
    } else {
      res.status(404).json({ error: "Reservation not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// PUT /api/reservations/:id - Updates the reservation by id
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedReservation = req.body;
    const result = await knex("reservations")
      .where("id", id)
      .update(updatedReservation);
    if (result) {
      res.json({ message: "Reservation updated successfully" });
    } else {
      res.status(404).json({ error: "Reservation not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE /api/reservations/:id - Deletes the reservation by id
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await knex("reservations").where("id", id).del();
    if (result) {
      res.json({ message: "Reservation deleted successfully" });
    } else {
      res.status(404).json({ error: "Reservation not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
