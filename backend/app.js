const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/event-routes");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/events", router); 
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



mongoose
  .connect(
    "mongodb+srv://sammienator:sammienatorpassword@cluster0.acw3bcd.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {gg
    app.listen(PORT, function(){
      console.log('server is omanyala');
    });
  })
  .catch((err) => console.log(err));
