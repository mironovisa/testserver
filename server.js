const express = require("express");
const app = express();
const cors = require("cors");
const { verify } = require("./utils/jwt");
require("dotenv").config();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");

  res.send("hey bro");
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
