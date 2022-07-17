const PORT = process.env.PORT || 3000;
const host = '0.0.0.0';

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

    app.listen(process.env.PORT || 3000, function(){
      console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
    })
  })
  .catch((err) => console.log(err));
