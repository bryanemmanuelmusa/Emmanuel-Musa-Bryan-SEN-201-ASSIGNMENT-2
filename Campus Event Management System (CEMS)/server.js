const express = require("express");
const mongoose = require("mongoose");

const organizerRoutes = require("./Routes/organizerRoutes");
const eventRoutes = require("./Routes/eventRoutes");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/CEMS");

app.use("/organizers", organizerRoutes);
app.use("/events", eventRoutes);

app.listen(3000, () => {
  console.log("CEMS server running on port 3000");
});