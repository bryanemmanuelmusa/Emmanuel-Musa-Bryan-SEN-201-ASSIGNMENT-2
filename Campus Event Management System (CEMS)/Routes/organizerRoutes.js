const express = require("express");
const Organizer = require("../models/Organizer");

const router = express.Router();

/*
  Organizer Registration
*/
router.post("/register", async (req, res) => {
  const organizer = new Organizer({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  await organizer.save();
  res.send("Organizer registered successfully");
});

/*
  Organizer Login
*/
router.post("/login", async (req, res) => {
  const organizer = await Organizer.findOne({
    email: req.body.email,
    password: req.body.password
  });

  if (organizer) {
    res.send("Login successful");
  } else {
    res.send("Invalid email or password");
  }
});

module.exports = router;