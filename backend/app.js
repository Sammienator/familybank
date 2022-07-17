const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/event-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/events", router); 

mongoose
  .connect(
    "mongodb+srv://sammienator:sammienatorpassword@cluster0.acw3bcd.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
