const mongoose = require("mongoose");
const config = require("./config");

// connect to mongo db
const mongoUri = config.mongo.URI;
mongoose
  .connect(
    mongoUri,
    { useNewUrlParser: true }
  )
  .then(
    () => console.log("Connected to MongoDB"),
    err =>
      console.log(`unable to connect to database: ${mongoUri} due to ${err}`)
  );
