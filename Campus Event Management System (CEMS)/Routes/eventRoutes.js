const express = require("express");
const Event = require("../models/Event");

const router = express.Router();

router.post("/create", async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.send("Event created successfully");
});

router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

module.exports = router;
