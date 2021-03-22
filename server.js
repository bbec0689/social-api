const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3030;

// use
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(require("./routes"));

// mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/SMD", {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("debug", true);

app.listen(PORT, () => console.log(`Live on port ${PORT}`));